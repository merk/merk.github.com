---
layout: post
title: "Polycollection for Symfony2 Forms"
date: 2012-07-06 16:12
comments: true
categories: [symfony2, forms]
---

While creating a system at Infinite*, I came across the requirement that
we have a form collection that could cope with single table inheritance
used by Doctrine2. We have Invoices with many different kinds of lines
that would reference back to whatever object they were about, but all
contained common basic parameters common to all invoice lines.

Enter the Polycollection.

<!-- more -->

> **Note:**
> It doesnt matter what type of inheritance you use. This example talks
> about Doctrine's [Single Table Inheritance][] but anything will work
> as long as the collection has a common parent.

Basics
------

For this blog post, I'll describe a limited subset of actual classes
we're using, but you can use as many as you want with this set up.

First up, the structure of the entities we are using is as follows:

 * `Invoice#lines` is a collection that references a class InvoiceLine.
 * `InvoiceLine` is a [Single Table Inheritance][] entity that defines
   additional line entities we need. (We do this in our
   ImplementationBundle so that we don't need to worry about adding
   additional lines to the primary bundle that are not relevant to other
   systems using it)
 * `InvoiceLine` is a concrete class that contains our basic `InvoiceLine`
   which contains a description, quantity and unit price.
 * `InvoiceJobLine` extends `InvoiceLine` and links to a `Job` entity. We
   override the description getter/setter on this object to proxy them
   through to the `Job`.
 * `InvoiceProductLine` extends `InvoiceLine` and links to a `Product`
   entity. We override the description getter/setter as for the `Job`
   line except in addition we override the getter/setter of the unit
   price to disallow editing of the price and get the price set
   directly on the `Product`.

Set up
------

There is a bundle from Infinite* forthcoming that will contain this and
other helpers we've created over the course of a few applications. Until
then, there is a [gist here][] that contains the code necessary to set it
up.

On the primary InvoiceType, we need to pass an option `types` that contains
either the string name of types registered in the DIC, or instances of
`FormTypeInterface`.

The `PolyCollection` uses the data_class option of each form type to
determine which will apply to an object of the collection. In the case where
there is no type with a matching data class, the `PolyCollection` will pick
the first type passed in via the `types` array. At this time, the
`PolyCollection` does not support array types.

Each form type used in the PolyCollection must contain a hidden `_type`
field that has the value returned by the form's `getName` function. We've been
using:

{% gist 3058342 AbstractInvoiceLineType.php %}

The definition of the InvoiceType could look something like:

{% gist 3058342 InvoiceType.php %}

Templates
---------

Until Infinite* releases the bundle, there isnt any reference javascript
to use for generating the template HTML, but it is basically the same
as what is used for a normal collection with prototypes.

An abbreviated copy of the twig template we're using:

{% gist 3058342 template.html.twig %}

[Single Table Inheritance]: http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/inheritance-mapping.html#single-table-inheritance
[gist here]: https://gist.github.com/3058342
