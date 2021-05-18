
## Candidate: listingslab

`https://github.com/listingslab-software/advicator/pull/10`

This PR delivers listingslab's completed devtest, a WordPress Plugin called Advicator 
which aims to address requirements in the following tasks

1. [Create a new product which will be used for a trial product](https://github.com/listingslab-software/advicator/issues/2)
2. [Set up the trial-to-subscription as a plugin](https://github.com/listingslab-software/advicator/issues/3)
3. [Cancelling Trial early gets full charge](https://github.com/listingslab-software/advicator/issues/4)
4. [Purchasing Option Styling/Layout](https://github.com/listingslab-software/advicator/issues/5)
5. [Affiliate postback plugin](https://github.com/listingslab-software/advicator/issues/6)

Taking direction from [calmcures.co.uk](https://calmcures.co.uk/product/starter-pack), I created a [Gummies Trial Pack](https://woocommerce-368502-1795531.cloudwaysapps.com/product/gummies-trial/) by duplicating one of the existing products and amending the settings

Developing the plugin needs to be done on a locally running LAMP stack. I've used [Dulplicator](https://snapcreek.com/duplicator/docs/quick-start/) for that

I then bootstrapped a new WordPress plugin called **Advicator**. This is a fully standards compliant plugin, meaning that if it were submitted to the real plugin directory it might not get rejected for those reasons.

Plugins can be shared and used as a [zip file](https://github.com/listingslab-software/advicator/raw/devtests/listingslab/plugins/advicator.zip). The Advicator plugin should work locally and then be able to be zipped up and deployed to the WordPress site by any administrator

OK, we've got a WordPress plugin we can start to identify exactly what it should do. Basically its job os to give us a framework from which we can tap into a key WordPress & WooCommerce feature called [hooks](https://developer.wordpress.org/plugins/hooks)

A key concept used in WordPress is hooks. WooCommerce has hooks too. Plenty of them. The other plugins we're using simply plugin to the same hooks to create functionality we want. For each one we're onlly probably using the tip of the iceberg. For instance there's probably a lot of functionality in the subscriptions plugin that we don't know about. No point reinventing the wheel.

The job of Advicator Plugin becomes to use [hooks](https://github.com/listingslab-software/advicator/blob/devtests/listingslab/plugins/advicator/advicator-woo-hooks.php) to stitch the different bits of functionality together and make it easy to present nicely on the front. It should achieve that and still achieve the goal of being a working plugin which can be deployed across multiple WordPress sites


#### QA/Testing 

1. **Frontend**

- Navigate to https://woocommerce-368502-1795531.cloudwaysapps.com
- Verify the homepage has been edited
- Click through to buy trial pack

> You should see...

Changes: There is a new a Trial Pack product.

2. **Advicator Plugin**

- Latest zip [here](https://github.com/listingslab-software/advicator/raw/develop/listingslab/plugins/advicator.zip)
- Navigate to [wp-admin](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/)
- Log in to WordPress 
	- U: listingslab@me.com
	- P: theBuild3r
- Navigate to Settings > [Plugins](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/plugins.php)
- Click **Add New**
- Click **Upload Plugin**
- Choose the zip previously downloaded
- Click **Install Now**
- Update or Activate the plugin

> You should see...
![ss_product](../../media/install-plugin.png?raw=true)

- Navigate to the [plugin admin page](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/admin.php?page=advicator)

> You should see...
![ss_product](../../media/plugin-admin.png?raw=true)

#### Docs 

[Environment](../Environment.md)&nbsp;|&nbsp;[GitHub](../GitHub.md)&nbsp;|&nbsp;[Hooks](../Hooks.md)&nbsp;|&nbsp;[Pull Requests](../Pull_Requests.md)&nbsp;|&nbsp;[Reference](../Reference.md)&nbsp;|&nbsp;[Duplicator](../Duplicator.md)&nbsp;|&nbsp;[STFP](../STFP.md)

