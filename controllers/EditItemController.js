angular.module("zerionApp").controller('EditItemController', function($scope, $http, $routeParams, $location) { 

    var itemId = $routeParams.itemId;

    // When page loads, ask API for all items in database
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

    // API call to update item
    this.saveItem = function() {

      console.log("save item initiated")
   
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