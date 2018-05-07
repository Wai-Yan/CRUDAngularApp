angular.module("zerionApp").controller('MainController', function($scope, $http, $location, $routeParams) {
  $scope.thumbViewOn = true;

  // Gets every item in the database
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

  // Deletes an item based on its ID
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