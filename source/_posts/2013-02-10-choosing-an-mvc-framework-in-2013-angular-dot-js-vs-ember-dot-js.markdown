---
layout: post
title: "Choosing an MVC framework in 2013: Angular.js vs Ember.js"
date: 2013-02-10 23:10
published: false
comments: true
categories:
---
``` javascript
/* Controllers */

function GameListController($scope, Games, Auth) {
  Games.list(function(data){
    $scope.games = data.response;
  });

  $scope.orderProp = 'working_title';
}

```