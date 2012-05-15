---
layout: post
title: "Using PropertyPath on your own objects"
date: 2012-05-11
comments: true
categories: [symfony2, property-path]
---

Something that comes up every so often is how to convert the name of
a property into a getter or setter, and generally the solution proposed
is something like the following.

{% codeblock lang:php %}
<?php

$accessor = 'get' . ucfirst($property);
$object->$accessor();
{% endcodeblock %}

While this might be an acceptable method, there are more elegant solutions,
one of which is using the [PropertyPath][] utility provided by the
Symfony2 Form component.

The PropertyPath utility provides more advanced functionality, which will
search for a getter, isser or hasser method, then fall back to trying to
access the property itself.

<!-- more -->

Consider the following object:

{% codeblock lang:php %}
<?php

class Bar
{
    public $patrons = 0;
    protected $closed = false;

    /**
     * Is the bar closed?
     */
    public function isClosed()
    {
        return $this->closed;
    }

    /**
     * Returns the number of patrons at the bar
     * unless it is closed.
     */
    public function getPatrons()
    {
        return $this->closed ? 0 : $this->patrons;
    }

    // ... more cool stuff ...
}
{% endcodeblock %}

Should you need to access information on this object without knowing in
advance which properties you'd like to call, PropertyPath can help you out.

{% codeblock lang:php %}
<?php

use Symfony\Component\Form\Util\PropertyPath;

$bar = new Bar();

/**
 * Check if the bar is closed, using isClosed
 */
$property = 'closed';
$path = new PropertyPath($property);

$closed = $path->getValue($bar);

/**
 * How many patrons are in attendance?
 *
 * Will return the number of patrons or 0 if the bar
 * is closed.
 */
$property = 'patrons';
$path = new PropertyPath($property);

$patrons = $path->getValue($bar);
{% endcodeblock %}

Chaining calls
--------------

Another feature of the PropertyPath utility is that it will let you
chain calls down an object graph. Consider you wanted to make a call
that would be converted to `$bar->getPatrons()->getFirst()->getName()`,
you could use the property path `patrons.first.name` when constructing
the PropertyPath.


[PropertyPath]: https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Form/Util/PropertyPath.php
