angular.module("zerionApp").controller('NewItemController', ["$apiCall", "$scope", "$http", "$location", function($apiCall, $scope, $http, $location) {

  // Grabs method from API service
  this.createNewItem = $apiCall.createNew;

  // When user clicks Save
  this.saveChanges = function() {
    this.createNewItem($scope.name, $scope.description, $scope.url)
      .then(result => {
        $location.path('/');
        return;
      })
      .catch(err => {
        console.log(err)
        return;
      })
  }
}])