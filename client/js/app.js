console.log('app.js loaded...');

angular.module('ResourceManager', ['ngCookies']);
// angular.module('UserManager', []);

angular.module('ResourceManager')
.controller('UsersController', ['$scope', '$http',  '$cookies', function($scope, $http, $cookies){

$scope.users = [];
$scope.newUser = {};
$scope.logInUser = {};

$scope.getUsers = function(){
  $http.get('/api/users').then(function(response){
    $scope.users = response.data;
  });
};
$scope.getUsers();

$scope.createUser = function(){
  $http.post('/api/users', $scope.newUser).then(function(response){
    $scope.users.push(response.data);
    $scope.newUser = {};
  });
};

$scope.obtainToken = function(){
  $http.post("/api/users/authentication_token", $scope.logInUser).then(function(reponse){
    $scope.token = reponse.data.token;
    $cookies.put('token', $scope.token);
  });
};

$scope.logOut = function(){
 $cookies.remove('token');
 $scope.token = $cookies.get('token');
};

$scope.token = $cookies.get('token');

}]);



angular.module('ResourceManager')
    .controller('ResourcesController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

      $scope.resources = [];
      $scope.newResource = {};
      $scope.searchQuery = "";

      $scope.orderByField = 'title';

      $scope.reverse = false;

      $scope.updateOrderBy = function(){
        $scope.reverse = !$scope.reverse;
      }

      $scope.getResource = function(){
        $http.get('/api/resources').then(function(response){
          $scope.resources = response.data;
        });
      };

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




    $(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();

     $('input#input_text, textarea#textarea1').characterCounter();
 });
