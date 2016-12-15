angular.module('MyStore').factory('Order', ['$resource', function($resource) {
  return $resource('/orders/:order_id/:id', 
    { 
      order: '@order_id',
      id: '@id'
    },
  {
   'update': { method: 'PUT'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
}]);
