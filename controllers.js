var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://bgordon.firebaseio.com/messages");
  var sync = $firebase(ref);
  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text,balance) {
    $scope.messages.$add({text: text,balance: balance});
  }
});

