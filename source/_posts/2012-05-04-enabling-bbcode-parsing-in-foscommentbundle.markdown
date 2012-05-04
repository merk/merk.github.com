---
layout: post
title: "Enabling BBCode parsing in FOSCommentBundle"
date: 2012-05-04 16:50
comments: true
categories: [symfony2, comment-bundle]
---

FOSCommentBundle recently added functionality that allows you
to use some kind of markup parser to let your users post more
than just plain text comments. The way it is implemented allows
the developer to choose which parser for whatever language they
desire.

In this article, we assume you are using Symfony2.0 with the
deps file and bin/vendor management. For Symfony2.1 users, you
are able to replace the parts of the instructions with composer,
which is beyond the scope of this article.

<!-- more -->

To be able to use a markup parser, you must be using a commit
of `0fb403c6f1` or newer, or the upcoming 1.1.0 version.

Dependencies
------------

Because of the way that the BBCode parser we're going to use works,
we will need to additionally implement a HtmlPurifier to make sure
that the HTML is safe for displaying. For this, we'll be using
[ExerciseHtmlPurifierBundle][]. Follow the installation instructions
provided by this bundle.

Done that?

Next we need to install the BBCode parser, add the following to your
deps file and autoload.php:

{% codeblock lang:ini deps %}
[StringParser_BBCode]
    git=http://github.com/merk/StringParser_BBCode.git
    target=stringparser-bbcode
{% endcodeblock %}

{% codeblock lang:php app/autoload.php %}
<?php
// ...
$loader->registerPrefixes(array(
    // ...
    'StringParser' => __DIR__.'/../vendor/stringparser-bbcode/src',
    // ...
));
{% endcodeblock %}

And run `bin/vendor install` to install the parser.

Configuration
-------------

[StringParser_BBCode][] comes with many different options about how
to configure it, letting you specify which BBCode tags should be allowed
and what they will be transformed into.

We will need to set up a service called `BBCodeParser` that implements
[ParserInterface][] from FOSCommentBundle, which has a single method,
`parse`. We will use the service we implement to configure our
StringParser_BBCode class, but you can use whatever method you'd like to
get an instance of StringParser_BBCode into our new `BBCodeParser`.

Our example set up will enable [B] and [I] BBCodes, if you need more take
a look at the documentation provided by [StringParser_BBCode][], there
are more examples provided there.

Below is an example implementation of `BBCodeParser`, a class that will
need to be placed inside a bundle in your application. Generally, an
application will need to have an AppBundle to implement bits and pieces
required for other bundles.

{% gist 1948617 BBCode.php %}

Once you've got your `BBCoderParser` set up the way you want it, you need
to configure the Symfony2 container to tell it about the parser, and let
FOSCommentBundle know about it.

The configuration example below sets up the ExerciseHTMLPurifier to
disallow all HTML, combined with the Parser above, will remove all HTML
and then convert the BBCode to HTML.

> **Security Risk**
>
> You must be careful with the HTMLPurifier configuration so that
> no unexpected HTML gets through the parser. You may expose your website
> to XSS attacks if not properly configured.

{% gist 1948617 config.yml %}

And you're done. Any comments created from this point onwards will be parsed
for BBCode and that will be converted to the HTML you've specified.

[ExerciseHTMLPurifierBundle]: https://github.com/Exercise/HTMLPurifierBundle
[StringParser_BBCode]: http://www.christian-seiler.de/projekte/php/bbcode/index_en.html
[ParserInterface]: https://github.com/FriendsOfSymfony/FOSCommentBundle/blob/master/Markup/ParserInterface.php
