var ZerionApi = angular.module('ZerionApi', [])
  .service('$apiCall', function ($http, $q) {

    this.retrieveAllItems = function() {
      return $http({
        method: 'GET',
        url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
        headers: 
          { 
            "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
          }
      })
    }

    this.deleteItem = function(itemId) {
      return $http({
         method: 'DELETE',
         url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
         headers: 
           { 
             "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
           }
      })
    }

    this.getSingleItem = function(itemId) {
      return $http({
        method: 'GET',
          url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
          headers: 
          { 
            "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614"
          }
        })
    }

    this.saveItem = function(itemId, name, description, url) {  
      return $http({
      method: 'PUT',
      url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + itemId,
      headers: 
        { 
          "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614",
          "content-type": "application/json"
        },
        data: { 
          "name": name, 
          "description": description, 
          "imgs":[
            {
              "url": url
            }
          ]
        }
      })
    }

    this.createNew = function(name, description, url) {
      return $http({
        method: 'POST',
        url : "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
        headers: { 
          "Authorization": "Bearer 30929b911de32a3de3fcf7ab7b70c2f44bee3615-f36f43ba47e3446116951a103ad421c44b415614",
          "content-type": "application/json"
          },
        data: { 
          "name": name, 
          "description": description, 
          "imgs":[
            {
              "url": url
            }
          ]
        }
      })
    }
});