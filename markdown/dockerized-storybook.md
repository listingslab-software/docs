# storybook-cwx

Dockerized, Deployable Storybook instance

```
docker build -t storybook-nginx .
docker run --name storybook-nginx -d -p 8080:80 storybook-nginx
```

## What is Storybook for?

![Just like in the Matrix](https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/png%2fstorybook_matrix_construct.png?alt=media&token=172b8689-20bf-4c45-b2f5-cb128969761d)

Storybook is the construct. Just like in the Matrix. It is an excellent piece of JavaScript software which keeps components comlpetely separate from their destination. This is good. Say a company has many products, they can create a set of UI components which look and function identically across all the companys' apps. This is used brilliantly by folk like Atlassian and Airbnb and in a really crap way by thousands of others. You know who you are.

Another approach is to use Storybook is as part of the development process. For us, Stories are the finest grain in our Agile GitHub workflow. Everything starts with a Story.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)