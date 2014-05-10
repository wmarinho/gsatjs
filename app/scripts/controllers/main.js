'use strict';

angular.module('gsatjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).controller('NavController', function ($scope, $location, $modal) {
    $scope.isCollapsed = true;
	$scope.dashboards = ['Dashboard1', 'Dashboard2', 'Dashboard3'];
	$scope.user = "Wellington Marinho";
	$scope.company = "Globosat";
	 
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
		
	
	$scope.open = function () {
		var modalInstance = $modal.open({
		  templateUrl: 'perfilUsuario.html',
		  controller: ModalInstanceCtrl		  
    });   
  };
  var ModalInstanceCtrl = function ($scope, $modalInstance) {  
	  $scope.close = function () {
		$modalInstance.close();
	  };
  };
});
