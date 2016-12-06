angular.module('MyStore').controller('portfolioCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  portfolioCtrl]);

function portfolioCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('portfolio')
  $scope.portfolio = [
    {
      name: "Интернет-магазин женского нижнего белья CandyLadyShop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/candy.jpg",
      href: "http://candyladyshop.ru/",
      float: "left",
      margin: "0px -15px 0px 15px"
    },
    {
      name: "Квест-проект Тайная комната",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/secret.jpg",
      href: "http://secretroomkharkov.com.ua",
      float: "right",
      margin: "0px 15px 0px -15px"
    },
    {
      name: "Поиск жилья на Арабатской стрелке Rest-In-Ukraine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/rest.jpg",
      href: "http://secretroomkharkov.com.ua",
      float: "left",
      margin: "0px -15px 0px 15px"
    }
    ,
    {
      name: "KRISOL - стильная женская одежда",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dignissimos similique id voluptas, repudiandae error fuga est doloremque.",
      photo: "assets/portfolio/krisol.jpg",
      href: "http://secretroomkharkov.com.ua",
      float: "right",
      margin: "0px 15px 0px -15px"
    }
  ]
}
