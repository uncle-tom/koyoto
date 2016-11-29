angular.module('MyStore').controller('createCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  createCtrl]);

function createCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('createCtrl')
	
	$scope.sections = [
    {
    	name: 'Сайт-визитка',
	    slogan: 'Качественный сайт - успешный бизнес!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: 'http://imprimatur.artlebedev.ru/f/1/features/geo-vbank.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsam nesciunt suscipit ut nemo quidem.',
	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti necessitatibus impedit saepe, repellendus reprehenderit voluptatibus aliquid architecto. Libero possimus quidem, alias, ipsam molestiae aliquam, voluptates error, enim debitis molestias exercitationem.'
  	},
    {
    	name: 'Промо-сайт',
  		slogan: 'Заявите о себе - начните продавать в интернете!',
	    seotitle: 'Заказать промо-сайт прямо сейчас',
	    img: 'http://imprimatur.artlebedev.ru/f/1/features/geo-vbank.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'},
		    {i: 'Техническая консультация'},
		    {i: 'Бесплатный хостинг на 3 месяца'},
		    {i: '20% скидка на продвижение'}
	    ],
	    seotext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsam nesciunt suscipit ut nemo quidem.',
	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti necessitatibus impedit saepe, repellendus reprehenderit voluptatibus aliquid architecto. Libero possimus quidem, alias, ipsam molestiae aliquam, voluptates error, enim debitis molestias exercitationem.'
  	
  	},
    {
    	name: 'Landing Page',
  		slogan: 'Качественный сайт - успешный бизнес!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: 'http://imprimatur.artlebedev.ru/f/1/features/geo-vbank.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsam nesciunt suscipit ut nemo quidem.',
	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti necessitatibus impedit saepe, repellendus reprehenderit voluptatibus aliquid architecto. Libero possimus quidem, alias, ipsam molestiae aliquam, voluptates error, enim debitis molestias exercitationem.'
  	},
    {
    	name: 'Корпоративный',
  		slogan: 'Качественный сайт - успешный бизнес!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: 'http://imprimatur.artlebedev.ru/f/1/features/geo-vbank.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsam nesciunt suscipit ut nemo quidem.',
	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti necessitatibus impedit saepe, repellendus reprehenderit voluptatibus aliquid architecto. Libero possimus quidem, alias, ipsam molestiae aliquam, voluptates error, enim debitis molestias exercitationem.'
  	},
    {
    	name: 'Интернет-магазин',
  		slogan: 'Качественный сайт - успешный бизнес!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: 'http://imprimatur.artlebedev.ru/f/1/features/geo-vbank.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsam nesciunt suscipit ut nemo quidem.',
	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti necessitatibus impedit saepe, repellendus reprehenderit voluptatibus aliquid architecto. Libero possimus quidem, alias, ipsam molestiae aliquam, voluptates error, enim debitis molestias exercitationem.'
  	},
  ];

  $scope.setMaster = function(section) {
    $scope.selected = section;
  }

  $scope.isSelected = function(section) {
    return $scope.selected === section;
  }
}
