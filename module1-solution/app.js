(function(){
  'use strict'

  angular.module('LunchCheckApp', [])
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


    function setColor($scope, str){
      if(str.length === 0){
        $scope.fontColor={color:'red'};
        $scope.borderColr={'border-color':'red'};
        return;
      }
      $scope.fontColor = {color:'green'};
      $scope.borderColr={'border-color':'green'};
    }


    function setMsg($scope, str){
      if(str.length === 0){
        $scope.msg = 'Please enter data first';
        return;
      }
      var cnt = count(str);
      if(cnt < 4){
        $scope.msg = 'Enjoy!';
        return;
      }
      $scope.msg = 'Too much!';
    }


   function count(str){
     var arr = str.split(',');
     var cnt = 0;
     for (var item of arr) {
       if ((item.trim()).length !== 0) {
         cnt++;
       }
     }
     return cnt;
   }

})();
