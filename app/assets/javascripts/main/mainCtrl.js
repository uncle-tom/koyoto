angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 'Order',
   'Product', 'InvoiceItem', 'Address', mainCtrl]);

function mainCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, ngCart, Order, Product, InvoiceItem, Address) {

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

  $scope.new_order = new Order();

  $scope.updateOrder = function() {
    if(!$scope.new_order.id) {
      $scope.new_order.payment_type = $scope.user.payment_type;

      $scope.new_order.$save(function(order) {
        $scope.new_order.id = order.id;
        
        $.map(ngCart.getCart().items, function(el) {
              
          var invoice_item = new InvoiceItem({
            product_id: el._id, 
            price: el._price, 
            count: el._quantity,
            order_id: order.id,
            color: el.getData().color,
            size: el.getData().size
          });

          invoice_item.$save();

          var address = new Address({
            order_id: order.id,
            user_name: $scope.user.name,
            user_phone: $scope.user.phone,
            user_email: $scope.user.email,
            town: $scope.user.city,
            address: $scope.user.address, 
            notes: $scope.user.notes
          });

          address.$save();
          ngCart.empty()
        });
      })
    }
  }

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
  
  
}
