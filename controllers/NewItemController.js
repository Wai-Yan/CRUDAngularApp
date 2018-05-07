angular.module("zerionApp").controller('NewItemController', function($location, $scope, $http) {

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