---
layout: post
title: "Choosing a JS MVC framework: Angular.js vs Ember.js"
date: 2013-04-11 14:00
published: false
comments: true
categories:
---

## tl;dr
As of late March 2013, after spending a month with each project, digging into documentation and examples available, I can say with confidence: **use AngularJS**. Ember is not ready for prime time, **yet**.

{% blockquote Trek Glowacki, Ember core team member http://trek.github.com/ %}
AngularJS is a dream if you're accustomed to HTML data- style behavior like you find as part of Twitter Bootstrap's javascript
{% endblockquote %}

## Some context

Year 2013 started with two great projects for me – building a basic version of an app dashboard using Angular and Ember. Think simplified version of Double-Click or Google Analytics. The app is purely client-side single page JavaScript, talking to a few server APIs.

You might have heard or seen the [talk by Double-Click team](http://www.youtube.com/watch?v=oJoAnVRIVQo) about moving to AngularJS.
So have I and my gut feeling was that Angular would be a perfect fit for this project. Glancing into the future, or actually present, that assumption was spot on and it's Angular's sweet spot type of app.

MVC framework comparison algorithm:

1. Check out available docs, blog posts and example apps
1. Go through Tutorial
1. Build app prototype
1. Rinse and repeat

Apart from the data-bindings and MVC awesomeness that both framworks bring to the table, here are three things that drew me to AngularJS:

### Focus on testing

AngularJS team is using [Karma](http://karma-runner.github.io/) (formerly Testacular) to test the framework itself and go extra mile writing end-to-end and unit tests for all the steps in the [Tutorial](http://docs.angularjs.org/tutorial). Having testable code is part of AngularJS philosophy. Making it easy to write tests is crucial. I don't care how smart your code is – if it's not testable, it's useless in the long run.

### App structure

It might sound like a minor thing, but if you have a team of developers working on a project, having a scalable app structure right out of the box is very helpful. Key angular concepts translate naturally into ```controllers```, ```directives```, ```filters``` and ```services``` files or directories. I also like the way the app is broken into such concepts – seems very natural to me, unlike the Ember approach.

### Extending HTML

I really like Angular's philosophy of extending HTML syntax instead of abstracting HTML away with another templating language – *Angular is what HTML would have been had it been designed for applications* (from [Docs/Overview](http://docs.angularjs.org/guide/overview))

### * Made in Google

Bonus point. Google has one of the strongest engineering cultures. Combine that with the resources that they have and with the power of open source and you get a really great combination. During the recent Angular meetup in Mountain View I've chatted quickly with the creator of AngularJS, [Miško Hevery](http://twitter.com/mhevery). He confirmed my assumptions that AngularJS team is in sync with Chrome Dev team and I think it has a very strong strategic advantage.


## What about Ember?

March was pretty rough for Ember team with a lot of angry posts about how confusing and hard it is getting started with it. Significant changes to the ```router``` didn't help that either and the amount of up to date examples and articles was approaching 0. That being said, best way to resolve Ember questions appeared to be just reading its source code and comments there.

Here is a list of interesting posts in chronological order:

1. [EmberJS Confuses Me](http://wekeroad.com/2013/03/06/ember-confuses-me) – by [Rob Conery from Tekpub](https://twitter.com/robconery)

1. [Ember: Baby Steps](http://wekeroad.com/2013/03/20/ember-baby-steps) – by [Rob Conery from Tekpub](https://twitter.com/robconery)

1. [“GETTING STARTED WITH EMBER.JS IS EASY.” - no it isn’t](http://discuss.emberjs.com/t/getting-started-with-ember-js-is-easy-no-it-isn-t/559) – discussion on Discourse which is built using Ember

1. [MAKING EMBER.JS EASIER](http://emberjs.com/blog/2013/03/21/making-ember-easier.html) – response from Ember team

1. [STABILIZING EMBER DATA](http://emberjs.com/blog/2013/03/22/stabilizing-ember-data.html)

1. [Ember... What If (Part 1)](http://wekeroad.com/2013/03/23/ember-what-if-part-1)

