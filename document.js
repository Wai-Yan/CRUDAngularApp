var app = angular.module('zerionApp', ['ngRoute'])

  .config(function($routeProvider) {
      $routeProvider
      .when("/", {
          controller:'MainController as itemList',
          templateUrl : "list.html"
      })
      .when("/detail/:itemId", {
          controller:'EditItemController as itemList',
          templateUrl : "detail.html"
      })
      .when("/detail/", {
          controller:'NewItemController as itemList',
          templateUrl : "detail.html"
      })
      .otherwise({
          redirectTo : "/"
      });
  })