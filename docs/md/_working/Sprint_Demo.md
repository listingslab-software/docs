Sprint Demo March 8th 2021 
Product owner: Barney, Developer: Chris

## Advicator WordPress Plugin

### Setup

Start by logging in to [woocommerce-368502-1795531](https://woocommerce-368502-1795531.cloudwaysapps.com). Create local version of the site for development using [Duplicator](https://wordpress.org/plugins/duplicator) or similar. 

	- U: listingslab@me.com
	- P: theBuild3r

![localhost](../../media/sprintdemo/duplicator.png)

My local LAMP server runs at the address http://localhost:8888, so  I end up with something like this

![localhost](../../media/sprintdemo/localhost.png)

## Working Locally

The [new instance](http://localhost:8888) has an Astra child theme with Elementor running alongside a mostly WooCommerce set of plugins

![localhost](../../media/sprintdemo/elementor.png)

We aim to leave all that code completely unchanged whilst effecting the features we need. Any changes made as a WP Admin are fine; they're just changes to various fields in the MySQL database. There will be a certain amount of tweaks to things like Subscriptions we'll need to make in [wp-admin](http://localhost:8888/wp-admin/). This should not require dev skills - just clear documentation

## Adding Advicator Plugin

Making changes to the plugin needs to be done by a developer. It's done through [GitHub](https://github.com/listingslab-software/advicator/projects/1). The dev clones the [advicator plugin repo](https://github.com/listingslab-software/advicator/tree/develop/plugins/advicator) and links it to their local WordPress. The plugin is [activated](http://localhost:8888/wp-admin/plugins.php) like any plugin

![clone](../../media/sprintdemo/clone.png) 

![clone](../../media/sprintdemo/activate_plugin.png) 

The unix command `ln` can be used to create a symlink from wherever you cloned the repo to your wordpress installation which lets you make changes to the code and see the results in context 

```
ln -s ~/Desktop/Node/advicator/plugins/advicator ~/Desktop/Node/wordpress/advicator/wp-content/plugins

```

## PHP Development

Now we can code. The PHP piece is the place to begin because this is a WordPress plugin after all. Get started with the [Plugin Settings](http://localhost:8888/wp-admin/admin.php?page=advicator) page. Here  set up the plugin's Options. There is only one option now; `advicator_enabled` to turn the plugin on and off. We can easily add new options like `advicator_affiliteId`

__`/advicator/plugins/advicator/admin/admin-traditional.php`__

```php
<?php

function advicator_register_settings() {
   add_option( 'advicator_enabled', true );
   register_setting( 
    'advicator_options_group', 
    'advicator_enabled', 
    'advicator_callback' );

  // add_option( 'advicator_affiliteId', 'XXX123' );
  //  register_setting( 
  //   'advicator_options_group', 
  //   'advicator_affiliteId', 
  //   'advicator_callback' );

}
...etc
```

## Add Frontend

The trick here is going to effect the public HTML of the WordPress site without making any changed to the theme's code. This is where we do something unique. We're going to embed a fully encapsulated React PWA into our theme. This React App is super clever. It doesn't need to render anything, or it can provide us with all the UI we need like 

How do we do that?

Simples. But first you need a React app. I'll come back to that. React apps have source and then get compiled into a build folder. It is that build folder which we can easily grab and inject into the theme using WordPress hooks and a bit of tweaking

Gets called in by add_action( 'wp_footer' hook & renders the latest build  of the PWA into the footer of the theme

__`/advicator/plugins/advicator/react/admin-pwa.php`__

```php
<?php
function advicator_PWA() {
  $data = array();
    $fields = array(
        'name', 'description', 
        'wpurl','admin_email', 
    );
    foreach($fields as $field) {
        $data[$field] = get_bloginfo($field);
    }
    $data[ 'wordpress_variables' ] = 'can be added here';

    if ( get_option( 'advicator_enabled' ) ){
        echo '<div class="advicator-pwa">';
        $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/pwa/build/index.html');
        $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
        'react/pwa/build/static', $html);
        $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
        'react/pwa/build/static', $html);
        echo '<script>';
        echo 'var pluginInfo = ' . json_encode($data) . ';';
        echo '</script></div>';
        echo $html;
    }
}
```

## PHP, WordPress &amp; JSON (JavaScript Object Notation)

WordPress represents each piece of content as PHP object called `$post`. The theme's job is to interpret and display that object as HTML that is returned to the visitor. 

Here's that same Object described in JSON. As you can see, it's the same thing, just with slightly different syntax. JSON is important. It's like XML which did a great job as being a way to structure data in a generic way. 

We might develop our own custom datashape which looks something like this

__`/advicator/plugins/advicator/react/pwa/src/redux/app/exmplePostObj.jsx`__

```javascript
export const exmplePostObj = {
  "ID": 12345,
  "post_title": "Trial Pack",
  "post_excerpt": `New to CBD? 20mg CBD Gummies provide relief for pain, anxiety, depression and stress and are also great promoting sleep. Contains 6 gummies of our range, everything you need to start exploring the benefits of CBD`,
  "product_price": 6.99,
  "product_image": `https://woocommerce-368502-1795531.cloudwaysapps.com/wp-content/uploads/2021/03/home_trial.png`,
  "advicator_upsell_calm": {
    "prices": {
      "mild": 29.99,
      "moderate": 49.99,
      "stronger": 69.99,
    },
    "image": `https://woocommerce-368502-1795531.cloudwaysapps.com/wp-content/uploads/2020/10/calm.png`   
  },
  "advicator_upsell_relax": {
    "prices": {
      "mild": 29.99,
      "moderate": 49.99,
      "stronger": 69.99,
    },
    "image": `https://woocommerce-368502-1795531.cloudwaysapps.com/wp-content/uploads/2020/10/relax.png`
  },
  "advicator_upsell_relief": {
    "prices": {
      "mild": 29.99,
      "moderate": 49.99,
      "stronger": 69.99,
    },
    "image": `https://woocommerce-368502-1795531.cloudwaysapps.com/wp-content/uploads/2020/10/relief.png`
  },
}
```

The reason JSON important is because EVERYTHING talks JSON now, including all parts of our DEV stack

- [WordPress REST API](https://developer.wordpress.org/rest-api/)
    - [example](http://localhost:8888/wp-json/wp/v2/pages/)
- React & Node
- NoSQL Databases store records as JSON objects



## Resources

- [Add to WooCommerce Cart using URLs](https://www.businessbloomer.com/woocommerce-custom-add-cart-urls-ultimate-guide/)
- [Store API](http://localhost:8888/wp-json/wc/store/)