---
layout: post
title: "Choosing an MVC framework in March 2013: Angular.js vs Ember.js"
date: 2013-02-17 23:10
published: false
comments: true
categories:
---

tl;dr

Angular is a dream if you're accustomed to HTML data- style behavior like you find as part of Twitter Bootstrap's javascript
Trek Glowacki, Ember core member http://trek.github.com/


### Structured
### Easy to test
### well documented
###
###


[EmberJS Confuses Me](http://wekeroad.com/2013/03/06/ember-confuses-me)

[Advice on & Instruction in the Use Of Ember.js](http://trek.github.com/)

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