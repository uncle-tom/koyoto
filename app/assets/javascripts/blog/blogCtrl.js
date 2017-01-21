angular.module('MyStore').controller('blogCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Order',  blogCtrl]);

function blogCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Order) {	
  console.log('blogCtrl')

  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  $scope.screenwidth = w;
  $scope.screenheight = h;
  console.log($scope.screenheight)

  $scope.new_order = new Order({order_id: $stateParams.id});

  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
        $state.go('thank')
      }
    );
  };
}