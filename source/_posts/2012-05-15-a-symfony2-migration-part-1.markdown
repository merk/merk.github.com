---
layout: post
title: "A Symfony2 migration - Part 1"
date: 2012-05-15 18:23
comments: true
categories: [symfony2, ozfortress]
---

In almost every situation, developers will always prefer to create
a brand new application rather than migrate a legacy application.
When you migrate an application, there is a large amount of baggage
that needs to be accounted for which means that you may end up
spending a large amount of time dealing with the legacy baggage.

On top of this, sometimes applications can be so large that it can
be almost impossible to rewrite the entire application in one go.
Another option is to slowly migrate features only a few at a time
while introducing tests to make sure that you're not breaking any
front-end functionality.

In this series of articles, I'm going to document my journey of
migrating an 8 year old vBulletin based application that currently
runs my hobby website [ozfortress][]. My plan is to slowly migrate
features to Symfony2 while leaving the legacy vBulletin application
to handle most of the sites features until I find time and
motivation to rewrite each discreet piece of functionality into a
Symfony2 bundle.

Migration Method
----------------

Having chatted with many people about methods for migrating and
how to handle which part of the site is handled by which part
of the application, legacy or new.

### Symfony2 Routing

The first method that can be used is sending every request through
the Symfony kernel, letting the router decide which requests should
go to a special `LegacyController` which will pass off the request
to the legacy application.

This method is great because it allows you to configure the routing
of the entire application inside the Symfony router and not have it
mixed throughout the new and old systems.

Be aware however that this method means loading the Kernel and its
hard depenedencies, followed by the router and any other Symfony
systems for every request which will add overhead to the legacy
parts of your application.

### Falling back to Symfony2

Another method which will use some webserver configuration to only
use the Symfony2 kernel when the request doesnt match an existing
file path on the filesystem.

The method needs very little custom configuration as the default
`.htaccess` file follows this logic already.

The benefit of this method is that the Symfony2 system will not be
initialised unless it is needed or if there is a 404 response
required.

### Including parts using ESI

Another option in the toolkit, while not specifically intended to
be a complete solution to migration is using a reverse proxy that
supports [ESI][] like Varnish that will let you include ESI tags
in the output of your legacy application where you want content
from the new application to be placed.

The advantage with using this method is that combined with either
of the above methods that you can include partial new functions
inside pages of the old application as you migrate them.

Next
----

In the next article, I will cover setting up an environment that
supports falling back to Symfony2 with ESI capabilities, along
with a strategy for sharing user sessions between the applications.


[ozfortress]: http://ozfortress.com
[ESI]: http://en.wikipedia.org/wiki/Edge_Side_Includes
