---
layout: post
title: "Using Doctrine's ResolveTargetEntityListener"
date: 2012-06-06 20:19
comments: true
categories: [symfony2, doctrine2]
---

Since version 2.2.0, Doctrine ships with a really handy listener,
[ResolveTargetEntityListener][] that lets you keep your bundles separated,
while still letting you define loose relationships between different
entities.

What this listener allows you to do is define a relationship target in
your entities that will be replaced at runtime. This becomes very useful
when you've got different bundles doing different things, and want to
have relationships between them, but not defining dependencies between
those bundles.

<!-- more -->

> Note that because of the version of Doctrine2 that this listener ships
> with, you will need to be using Symfony2.1 or upgrade your Doctrine
> version used in a Symfony2.0 project.

Background
----------

In the following example, the situation is we have an InvoiceBundle
which provides invoicing functionality, and a CustomerBundle that
contains customer management tools. We want to keep these separated,
because they can be used in other systems without each other, but for
our application we want to use them together.

Set up
------

We're going to use the following basic entities (which are incomplete
for brevity) to explain how to set up and use the RTEL.

{% gist 2881235 Customer.php %}
{% gist 2881235 Invoice.php %}
{% gist 2881235 InvoiceSubjectInterface.php %}

Next, we've got to set up the listener itself. Unfortunately, it does
not provide an easy way to set it up, and we need to extend it to add
the ability to pass the configuration through the constructor rather
than having to set up the DIC for many method calls.

{% gist 2881235 ResolveTargetEntityListener.php %}

And finally, we need to configure the listener. The entity_map
parameter takes a key value array, with the key being the interface
or base class to replace and the value being the concrete
implementation to point the relationship to.

{% gist 2881235 config.yml %}

Final Thoughts
--------------

With the ResolveTargetEntityListener, we are able to decouple our
bundles, keeping them usable by themselves, but still being able to
define relationships between different objects. By using this method,
I've found my bundles end up being easier to maintain independently.

[ResolveTargetEntityListener]: https://github.com/doctrine/doctrine2/blob/master/lib/Doctrine/ORM/Tools/ResolveTargetEntityListener.php