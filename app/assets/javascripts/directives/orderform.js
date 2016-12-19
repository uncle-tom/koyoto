angular
	.module('MyStore')
	.directive('orderform', function(){
		return {
			restrict: 'EA',
			templateUrl: "directives/html/orderform.html"
		}
	})