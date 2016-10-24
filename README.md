(function(){
  'use strict'

  angular.module('ShoppingListCheckOffApp', [])
    .controller('LunchCheckController', CheckController);

    CheckController.$inject = ['$scope'];
    function CheckController($scope){
      $scope.lunch = '';
      $scope.checkComma = function(){
        var str = $scope.lunch;
        setColor($scope, str);
        setMsg($scope, str);
      }
    }

    
    function CheckOffServiceProvider(){
        var provider = this;
		
		provider.defaults = {
			maxItems : 5
		};

        provider.$get = function(){
            var checkOff = new CheckOffService(provider.defaults.maxItems);

            return checkOff;
        };
    }

})();
