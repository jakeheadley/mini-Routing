angular.module('miniRoutingApp')
.controller('playerCtrl', function($scope, rosterService, $stateParams){

  $scope.player = rosterService.findPlayerById($stateParams.id)

})
