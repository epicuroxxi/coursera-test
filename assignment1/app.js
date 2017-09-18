(function(){
'use strict';
  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope,$injector){
    $scope.message = "";
    $scope.checkTooMuch = function(){
    	if(angular.isUndefined($scope.menu) || ($scope.menu.length == 0)){
			$scope.message = "Please enter data first";
    	}else if( $scope.menu.trim().split(',').length<4 ){
    		console.log($scope.menu.length)
    		console.log($scope.menu.trim().split(',').length);
    		$scope.message = "Enjoy";
    	}else{
    		$scope.message = "Too much!";
    	}
    };
  }

})();
