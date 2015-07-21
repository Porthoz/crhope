(function(angular) {

'use strict';
angular.module('crhope')
	.directive('generacion',generacionDir);

	function generacionDir(){
		return {
			restrict:'E',
			scope:{
				datosPj:"=ficha"
			},
			controller:function ($scope){
				var vm = $scope;

				vm.cambioGeneracion = function() {

		            var ajuste = function(maximo){

		                for (var i=0; i<vm.datosPj.modulos.length; i++){
		                    vm.datosPj.modulos[i].maximo=vm.datosPj.modulos[i].tipo==='topos-fijo'?5:maximo;
							vm.datosPj.modulos[i].maximo=vm.datosPj.modulos[i].tipo==='fuerza-voluntad'?10:maximo;

		                    for (var j=0; j<vm.datosPj.modulos[i].valor.length; j++){
		                        if (vm.datosPj.modulos[i].valor[j]>maximo) {
		                            vm.datosPj.modulos[i].valor[j]=maximo;
		                        }
		                    }
		                }
		            };
		            switch (vm.datosPj.generacion) {
		                case(7):
		                    ajuste(6);
		                    break;
		                case(6):
		                    ajuste(7);
		                    break;
		                case(5):
		                    ajuste(8);
		                    break;
		                case(4):
		                    ajuste(9);
		                    break;
		                case(3):
		                    ajuste(10);
		                    break;
		                case(null):
		                    break;
		                default:
		                    ajuste(5);
		            }

        		};

                $scope.$watch(function(){return vm.datosPj.generacion;},vm.cambioGeneracion);
			},
			templateUrl:'templates/generacion.html'
		};
	}
	
})(angular);