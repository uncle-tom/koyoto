angular.module('MyStore').controller('portfolioCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Order', 
  portfolioCtrl]);

function portfolioCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Order) {	
  console.log('portfolio')
  $scope.new_order = new Order({order_id: $stateParams.id});

  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
        $state.go('thank')
      }
    );
  };
  
  $scope.portfolio = [
    {
      name: "CandyLadyShop - женское нижнее белье",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/candy.jpg",
      type: "Интернет-магазин",
      href: "http://candyladyshop.ru/",
      float: "left",
      margin: "0px -15px 0px 15px",
      bg: "rgba(255, 218, 168, 0.49)",
      lookdisplay: 'block'
    },
    {
      name: "Квест-проект Тайная комната",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/secret.jpg",
      type: "Промо-сайт",
      href: "http://secretroomkharkov.com.ua",
      float: "right",
      margin: "0px 15px 0px -15px",
      bg: "rgba(181, 162, 148, 0.3)",
      lookdisplay: 'block'
    },
    {
      name: "Rest in Ukraine - отдыхайте в Украине",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/rest.jpg",
      type: "Промо-сайт",
      href: "http://rest-in-ukraine.com/",
      float: "left",
      margin: "0px -15px 0px 15px",
      bg: "rgba(94, 123, 158, 0.3);",
      lookdisplay: 'block'
    },
    {
      name: "KRISOL - стильная женская одежда",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/krisol1.jpg",
      type: "Интернет-магазин",
      href: "http://www.krisol.kiev.ua/",
      float: "right",
      margin: "0px 15px 0px -15px",
      bg: "rgba(254, 220, 172, 0.61)",
      lookdisplay: 'block'
    },
    {
      name: "Scooter Remont - все про скутеры",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/scooter.jpg",
      type: "Корпоративный сайт",
      href: "http://scooter-remont.com/",
      float: "left",
      margin: "0px -15px 0px 15px",
      bg: "rgba(255, 218, 168, 0.49)",
      lookdisplay: 'block'
    },
    {
      name: "Ваш новый проект",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/you.jpg",
      type: "Идеальный сайт",
      href: "/portfolio",
      float: "left",
      margin: "0px -15px 0px 15px",
      bg: "rgba(255, 218, 168, 0.49)",
      myclass: "last-child_portfolio",
      lookdisplay: 'none'
    }
  ]

  
}
