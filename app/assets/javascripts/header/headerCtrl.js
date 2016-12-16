angular.module('MyStore').controller('headerCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 
  'Auth', '$stateParams', '$location', '$translate', 'Product', 
  'Order', headerCtrl]);

function headerCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, $translate, Product, Order) {
	console.log('headerCtrl');
	
	$scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };

  $scope.order_site = 'vizitka';

  $scope.newOrder  = new Order({order_id: $stateParams.id});
  
  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
      }
    );
  };
}
