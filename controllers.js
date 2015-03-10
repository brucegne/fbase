var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://bgordon.firebaseio.com/messages");
  var sync = $firebase(ref);
  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text,balance) {
    $scope.messages.$add({text: text,balance: balance});
  }
});

app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var ref = new Firebase("https://bgordon.firebaseio.com/");
    var auth = $firebaseAuth(ref);
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  }
]);
