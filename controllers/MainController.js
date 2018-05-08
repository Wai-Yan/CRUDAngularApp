angular.module("zerionApp").controller('MainController', ['$scope', "$apiCall", '$location', function($scope, $http, $location, $routeParams, $apiCall, $injector, $q) {
  
  $scope.thumbViewOn = true;
  $scope.itemArray;

  // Grab API functions
  this.getItems = $http.retrieveAllItems;
  this.deleteSingle = $http.deleteItem;

  // Runs on initialize
  this.getItems().then(result => {
    $scope.itemArray = result.data;
  })

  // When user presses delete
  this.deleteButtonPressed = function(itemId) {
    this.deleteSingle(itemId)
    .then(() => {
      this.getItems()
      .then(result => { $scope.itemArray = result.data; })
    })
  }

  this.enterDetailsPage = function(itemId) {

    // Details page with Edit Controller
    if (itemId) {
      $location.path('detail/' + itemId);
    }
    
    // Details page with New Item Controller
    else {
      $location.path('detail/')
    }
  }
}]);