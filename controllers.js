var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://bgordon.firebaseio.com/messages");
  var sync = $firebase(ref);
  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text,balance) {
    $scope.messages.$add({text: text,balance: balance});
  }
});

app.controller('AuthCtrl', function ($scope, $firebaseAuth) {
  var ref = new Firebase('https://bgordon.firebaseio.com');

  $scope.auth = $firebaseAuth(ref);

  $scope.login = function() {
    $scope.num = 'logging in';
    $scope.auth.$authWithPassword({
      email: 'brucegne@gmail.com',
      password: 'p2shiver'
    }).then(function(authData) {
      console.log(authData);
    }).catch(function(error) {
      console.log(err);
      $scope.num = err;
    });
  };
});
