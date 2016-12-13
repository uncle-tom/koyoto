angular.module('MyStore').controller('createCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  createCtrl]);

function createCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('createCtrl')
	$scope.sections = [
    {
    	name: 'Сайт-визитка',
	    slogan: 'Заявите о себе - начните продавать в интернете!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: '/assets/create/landing.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'По статистике более 70% людей не доверяют компании, если у нее нет своего сайта.',
	    description: 'Сайт-визитка это первый шаг, чтобы рассказать о себе своим потенциальным заказчикам. Представьте, сколько людей заинтересовались вашим продуктом или услугой, но не смогли найти никакой информации в интернете о вашей компании. Разумеется, доверие не будет стопроцентным. А ведь именно мелочи, порой решают слишком много. Не упускайте своих клиентов.'
  	},
    {
    	name: 'Промо-сайт',
  		slogan: 'Качественный сайт - успешный бизнес!',
	    seotitle: 'Заказать промо-сайт прямо сейчас',
	    img: '/assets/create/promo.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'},
		    {i: 'Техническая консультация'},
		    {i: 'Бесплатный хостинг на 3 месяца'},
		    {i: '20% скидка на продвижение'}
	    ],
	    seotext: 'Чтобы продать свой товар или услугу необходимо выделиться из толпы. Промо-сайт идеальный инструмент для этого.',
	    description: 'Промо-сайт идеальный вариант, если вы хотите прорекламировать свою услугу, либо показать посетителям свой новый товар, который вызывет восторг у пользователей. На сайте встроены несколько полезных функций, которые позволят продемонстрировать ваши лучшие качества, а потенциальным клиентам получить всю доступную информацию.'
  	
  	},
    {
    	name: 'Landing Page',
  		slogan: 'Универсальное и эффективное решение!',
	    seotitle: 'Заказать Landing Page',
	    img: '/assets/create/landing.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Индивидуальный подход'}
	    ],
	    seotext: 'Landing Page позволяет повысить вашу конверсию более чем на 30%',
	    description: 'Основная задача Посадочной страницы - привлечь, как можно больше клиентов. Грамотное построение структуры помогает настроить гостя на дружеский лад и сагитировать к принятию нужного для вас решения - оформить заказ. Landing Page это настоящее оружие в руках умелого маркетолога. Хотите увеличить продажи? Закажите Landing Page!'
  	},
    {
    	name: 'Корпоративный',
  		slogan: 'Ваш сайт - лицо компании!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: '/assets/create/corp.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'Корпоративный сайт идеальный вариант для любой компании.',
	    description: 'Это много функциональный сайт, который позволить решить любую вашу задачу. Необходимо добавить новость компании? В админке подготовлен удобный функционал. Хотите обновить вакансии компании? Сделать это можно в два клика. Как итог, вы получаете сайт, который полностью будет соответствовать потребностям вашей компании.'
  	},
    {
    	name: 'Интернет-магазин',
  		slogan: 'Продавать в интернете так легко!',
	    seotitle: 'Заказать сайт-визитку под ключ',
	    img: '/assets/create/store.jpg',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    seotext: 'За один год примерно 3,7 миллионов украинцев покупали в интернете. И эта цифра стремительно растет!',
	    description: 'Разработанный нами интернет-магазин позволит сразу вам же начать продавать в интернете. Отлаженная система работы помогает нам создавать идеальные интернет-магазины - практически восьмое чудо света. Не стоит лишний раз говорить, какие перспективы у онлайн-продаж, вы и сами слышали про эти невероятные цифры. Убедитесь на собственном опыте, создайте интернет-магазин! '
  	},
  ];

  $scope.selected = $scope.sections[0];
  $scope.setMaster = function(section) {
    $scope.selected = section;
  }

  $scope.isSelected = function(section) {
    return $scope.selected === section;
  }
}
