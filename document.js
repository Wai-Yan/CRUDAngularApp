var app = angular.module('zerionApp', ['ngRoute', 'ZerionApi'])

  .config(function($routeProvider) {
      $routeProvider
      .when("/", {
          controller:'MainController as itemList',
          templateUrl : "list.html",
          resolve:{
            'apiCall':function($apiCall){
              return $apiCall.promise;
              }
          }
      })
      .when("/detail/:itemId", {
          controller:'EditItemController as itemList',
          templateUrl : "detail.html",
          resolve:{
            'apiCall':function($apiCall){
              return $apiCall.promise;
              }
          }
      })
      .when("/detail/", {
          controller:'NewItemController as itemList',
          templateUrl : "detail.html",
          resolve:{
            'apiCall':function($apiCall){
              return $apiCall.promise;
              }
          }
      })
      .otherwise({
          redirectTo : "/"
      });
  })