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

  .controller('NewItemController', function($location, $scope, $http) {

    this.saveItem = function() {

      $http({
         method: 'POST',
         url : "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
         headers: { 
           "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614",
           "content-type": "application/json"
          },
         data: { 
                 "name": $scope.name, 
                 "description": $scope.description, 
                 "imgs":[
                     {
                      "url": $scope.url
                    }
                 ]
               }
      })
      .then(result => {
        $location.path('/');
        return;
      })
      .catch(err => {
        console.log(err)
        return;
      })
    }
  })

  .controller('EditItemController', function($scope, $http, $routeParams, $location) { 

    var itemId = $routeParams.itemId;

    $http({
       method: 'GET',
       url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
       headers: 
         { 
           "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
         }
    })
    .then(result => {
      $scope.name = result.data.name;
      $scope.description = result.data.description;
      $scope.url = result.data.imgs[0].url;
    })
    .catch(err => {
      console.log(err)
    })


    // API call to delete item
    this.deleteItem = function() {   
      $http({
         method: 'DELETE',
         url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
         headers: 
           { 
             "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
           }
      })
      .then(result => {
        $location.path('/');
      })
      .catch(err => {
        console.log(err)
      })
    }

    // API call to update item
    this.saveItem = function() {
   
      $http({
         method: 'PUT',
         url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
         headers: 
           { 
             "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614",
             "content-type": "application/json"
           },
         data: { 
           "name": $scope.name, 
           "description": $scope.description, 
           "imgs":[
               {
                "url": $scope.url
              }
           ]
         }
      })
      .then(result => {
        $location.path('/');
      })
      .catch(err => {
        console.log(err)
      })
    }

    $scope.name;
    $scope.description;
    $scope.url;
  })

  .controller('MainController', function($scope, $http, $location, $routeParams) {
    $scope.tableViewOn = true;

    this.retrieveAllItems = function() {
   
      $http({
         method: 'GET',
         url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
         headers: 
             { 
               "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
             }
      })
      .then(result => {
        $scope.itemArray = result.data;
      })
      .catch(err => {
        console.log(err)
      })
    }

    this.retrieveAllItems();

    this.deleteItem = function(itemId) {
   
      $http({
         method: 'DELETE',
         url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
         headers: 
           { 
             "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
           }
      })
      .then(result => {
        this.retrieveAllItems();
        $location.path('/');
      })
      .catch(err => {
        console.log(err)
      })
    }
  });