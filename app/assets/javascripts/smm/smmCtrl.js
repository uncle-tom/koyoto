angular.module('MyStore').controller('smmCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Order',
  smmCtrl]);

function smmCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Order) {	
  console.log('smmCtrl')

  $scope.new_order = new Order({order_id: $stateParams.id});

  $scope.send_order = function() {
    Order.save({ order_id: $stateParams.id, order: $scope.newOrder,  }, 
      function(response) {
        console.log('resp from BE', response);
        $state.go('thank')
      }
    );
  };

  $scope.smmsections = [
    {
    	name: 'Аудит и взгляд со стороны',
    	number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_1_large.png',
    	text: "Всегда полезно посмотреть на работу незамыленным оком. К тому же, если это око опытного и матерого smmщика. Аудит помогает выделить сильные и слабые стороны, поэтому он так важен на начальном этапе.",
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
  	},
    {
    	name: 'Контент-план',
    	number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_2_large.png',
    	text: 'Вы наверняка слышали такую фразу - "Контент всему голова"? Не слышали? А что насчет фразы "Контент - король"? Слышали ведь? Это чистая правда, контент действительно очень важен. Одна из главных задача smm-агенства это составление качественного контент-плана. Нужно знать, как мы собираемся завоевать клиента, каким вареньем его кормить.',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'},
		    {i: 'Техническая консультация'},
		    {i: 'Бесплатный хостинг на 3 месяца'},
		    {i: '20% скидка на продвижение'}
	    ],
  	},
    {
    	name: 'Успешные кейсы',
    	number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_3_large.png',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Индивидуальный подход'}
	    ],
	    text: ''
  	},
    {
    	name: 'Таргетинговый таргетинг',
    	number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_4_large.png',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    text: ''
  	},
    {
    	name: 'Оформление страницы',
  		number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_5_large.png',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    text: ''
  	},
  	{
    	name: 'Стоимость',
  		number: 'http://images.apple.com/v/itunes/marketing-on-music/a/images/number_6_large.png',
	    include: [
	    	{i: 'Уникальный дизайн'},
		    {i: 'Внутренняя seo-оптимизация'}
	    ],
	    text: ''
  	},

  ];

	$scope.setMaster = function(section) {
    $scope.selected = section;
  }

  $scope.isSelected = function(section) {
    return $scope.selected === section;
  }
  
  // $.scrollify({
  //   section:".example-classname",
  //   scrollSpeed: 700,
  // });
  $scope.slider = [
    {
      text : 'Познакомились с ребятами за несколько месяцев до начала фестиваля. Времени на работу было очень мало, но в такие сжатые сроки умельцы из Koyoto Studio смогли сотворить маленькое чудо. Спасибо вам за работу - вы сделали все возможное и даже больше.',
      who : '- Дмитрий, BASS-generation'
    },
    {
      text : 'Очень трудно найти добропорядочных и ответственных работников в интернете. Но с первого дня сотрудничества с компанией Koyoto было понятно, что они не подведут и на них можно положиться. Я могу сказать только лесные слова о работе компании, однако самым наглядным результатом есть суточная посещаемость сайта scooter-remont.com - оцените, чего мы добились вместе!',
      who : '- Михаил, Scooter-remont'
    },
  ]

  $scope.cases = [
    {
      name: 'Изучив аудиторию и проанализировав статистику мы составили подробный контент-план. Было расписано что, когда и для какой аудитории публиковать. Выполняя стратегию по ведению страницы в Facebook мы добились увеличения органического охвата практически в два раза.',
      img: 'assets/smm/ohvat.png',
      client: 'Интернет-магазин бытовой химии'
    }, 
    {
      name: 'Основная цель, которую преследовал клиент - увеличить кол-во переходов на сайт. Имея большую аудиторию, количество переходов было очень низким. Так, создав фирменный стиль оформления постов, а также поработав над цепляющими заголовками, мы стали больше завлекать подписчиков на сайт.',
      img: 'assets/smm/perehod.png',
      client: 'Новостной портал'
    },
    {
      name: 'Проводилась ежедневная работа по рекламе и вовлечению пользователей социальной сети VK. Была также проведена SEO-оптимизация, которая позволила вывести группу на первое место в поисковой выдаче. Посещения страницы, как и количество подписчиков, регулярно росло.',
      img: 'assets/smm/pos.png',
      client: 'Шоурум нижнего белья'
    }
  ]

}
