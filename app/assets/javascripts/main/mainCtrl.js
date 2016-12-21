angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$state', '$http', '$stateParams', '$localStorage', '$sessionStorage', 'Order', mainCtrl]);

function mainCtrl($scope, $state, $http, $stateParams, $localStorage, $sessionStorage, Order) {

  $scope.slider = [
    {image : '/assets/slider/corp-slider1.jpg'},
    {image : '/assets/slider/corp-slider2.jpg'},
    {image : '/assets/slider/corp-slider3.jpg'},
    {image : '/assets/slider/corp-slider4.jpg'},
  ]
  
  $scope.disableSticking = false;

  $scope.swiper = {};

  $scope.next = function() {
      $scope.swiper.slideNext();
  };
  $scope.prev = function() {
    $scope.swiper.slidePrev();
  };
  
  //filter premium
  $scope.haspopularFilter = function(products, has_popular) {
    return products.has_popular === true;
  }

  $scope.new_order = new Order({order_id: $stateParams.id});

  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
        $state.go('thank')
      }
    );
  };

  $scope.openexample = function(){
    $('.example-window').fadeIn();
  }
  $scope.closeexample = function(){
    $('.example-window').fadeOut();
  }
  $scope.vizitkaopen = false;

  $scope.client = [
    {
      img: "http://www.ua-football.com/img/interface-next/logo.png"
    }, 
    {
      img: "http://krisol.kiev.ua/wp-content/uploads/2016/04/krisol-122222222png.png"
    },
    {
      img: "http://scooter-remont.com/forum/styles/subsilver2/imageset/s-r6.gif"
    },
    {
      img: "https://www.meteoprog.ua/images/meteoprog_logo.png"
    }
  ]

  var width = document.body.clientWidth;
  if (width > 600){
    $scope.probnik3 = 'assets/probnik3.png'; 
    $scope.zagotovka3 = 'assets/zagotovka3.png'; 
  } else {
    $scope.probnik3 = 'assets/mobile/probnik3.png';
    $scope.zagotovka3 = 'assets/mobile/zagotovka3.png';  
  }
  
  // $scope.func2 = function(){
  //   $scope.newOrder.vizitka = true;  
  // }
  
}
