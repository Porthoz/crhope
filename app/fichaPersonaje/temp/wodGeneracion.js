//Directiva que encapsula y la interfaz y la lógica para el cambio de generacion de un Pj
(function(angular) {

'use strict';
angular.module('crhope')
	.directive('generacion',generacionDir);

	function generacionDir(){

		return {
			restrict:'E',
			scope:{
				generacion:'=',
				maximo:"="
			},
			controller:GenCtrl,
			controllerAs:'ctrl',
			templateUrl:'/wodGeneracion.html'
		};
	}

	////////////

	function GenCtrl ($scope){
		var vm = this;

		vm.actualizarMatriz = function(){
			switch (vm.generacion) {
				case(7):
					vm.maximo=6;
					break;
				case(6):
					vm.maximo=7;
					break;
				case(5):
					vm.maximo=8;
					break;
				case(4):
					vm.maximo=9;
					break;
				case(3):
					vm.maximo=10;
					break;
				case(null):
					break;
				default:
					vm.maximo=5;
			}
		};

		$scope.$watch(function(){return vm.generacion},vm.actualizarMatriz);

	}

})(angular);