app.controller('MainController', function($scope, mainService) {



  $scope.getUsers = function() {
    var promise = mainService.getUsers();
    promise.then(function(dataFromService) {
      $scope.users = dataFromService;
    });
  };

  $scope.getUsers();

});
