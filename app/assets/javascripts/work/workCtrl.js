angular.module('MyStore').controller('workCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Order',  workCtrl]);

function workCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Order) {	
  console.log('workCtrl')
}
