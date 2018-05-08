angular.module("zerionApp").controller('EditItemController', ["$apiCall", "$scope", "$http", "$routeParams", "$location", function($apiCall, $scope, $http, $routeParams, $location) { 
  var itemId = $routeParams.itemId;

  $scope.name;
  $scope.description;
  $scope.url;

  this.getDetails = $apiCall.getSingleItem;
  this.saveInDb = $apiCall.saveItem;
  this.getItems = $apiCall.retrieveAllItems;

  // Grabs info to display
  this.getDetails(itemId)
    .then(result => {
      $scope.name = result.data.name;
      $scope.description = result.data.description;
      $scope.url = result.data.imgs[0].url;
    })
    .catch(err => {
      console.log(err)
    })

  // When user clicks save
  this.saveChanges = function() {
    this.saveInDb(itemId, $scope.name, $scope.description, $scope.url)
    $location.path('/');
    this.getItems().then(result => {
      $scope.itemArray = result.data;
    })
  }

  // Users clicks the back button
  this.returnHome = function() {
    $location.path('/');
  }
}])