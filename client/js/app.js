console.log('app.js loaded...son');

angular.module('ResourceManager', []);

angular.module('ResourceManager', [])
    .controller('ResourcesController', ['$scope', '$http', function($scope, $http){

      $scope.resources = [];
      $scope.newResource = {};

      $scope.getResource = function(){
        $http.get('/api/resources').then(function(response){
          $scope.resources = response.data;
        });
      };

      $http.get('/api/resources').then(function(response){
        $scope.resources = response.data;
      });

      $scope.createResource = function(){
        $http.post('/api/resources', $scope.newResource).then(function(response){
          $scope.resources.push(response.data);
        });
      };

      $scope.removeResource = function(resource){
        var url = '/api/resources/' + resource._id
        $http.delete(url).then(function(){
          $scope.getResource();
        });
      };

      $scope.getResource();

    }]);
