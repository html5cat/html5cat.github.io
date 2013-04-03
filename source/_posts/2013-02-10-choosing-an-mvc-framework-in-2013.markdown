---
layout: post
title: "Choosing a JS MVC framework: Angular.js vs Ember.js"
date: 2013-03-13 23:10
published: false
comments: true
categories:
---

## tl;dr
As of late March 2013, after spending a month with each project, digging into documentation and examples available, I can say: *it's not fair to compare them*. But if you really don't have time to dig into – **use Angular.js**. If you absolutely love Ember – **use Ember.js**.

{% blockquote Trek Glowacki, Ember core team member http://trek.github.com/ %}
AngularJS is a dream if you're accustomed to HTML data- style behavior like you find as part of Twitter Bootstrap's javascript
{% endblockquote %}

## Some context

Year 2013 started with two great projects for me – building a basic version of an app dashboard using Angular and Ember. Think simplified version of Double-Click or Google Analytics. The app is purely client-side CRUD, talking to a few server APIs.

You might have heard or seen the [talk by Double-Click team](http://www.youtube.com/watch?v=oJoAnVRIVQo) about moving to Angular.js.
So have I and my gut feeling was that Angular would be a perfect fit for this project. Glancing into the future, or actually present, that assumption was spot on.



### Structured
### Easy to test
### well documented
###
###


[EmberJS Confuses Me](http://wekeroad.com/2013/03/06/ember-confuses-me)

[Advice on & Instruction in the Use Of Ember.js](http://trek.github.com/)

http://discuss.emberjs.com/

<h1>HTML Ipsum Presents</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 2</h2>

<ol>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>

<pre><code>
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
</code></pre>


``` javascript
/* Controllers */

function GameListController($scope, Games, Auth) {
  Games.list(function(data){
    $scope.games = data.response;
  });

  $scope.orderProp = 'working_title';
}

```