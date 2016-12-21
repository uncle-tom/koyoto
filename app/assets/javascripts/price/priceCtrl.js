angular.module('MyStore').controller('priceCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Order',
  priceCtrl]);

function priceCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Order) {	
  console.log('price')
  $scope.project = 'vizitka';
  $scope.seo = 'seoaudit';
  $scope.smm = 'facebook';

  $scope.new_order = new Order({order_id: $stateParams.id});

  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
      }
    );
  };
}
