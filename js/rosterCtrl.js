angular.module('miniRoutingApp')
.controller('rosterCtrl', function($scope, rosterService){

  $scope.players = rosterService.getPlayers();

})
