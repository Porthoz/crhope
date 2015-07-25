//Directiva que encapsula y la interfaz y la lógica para el cambio de generacion de un Pj
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
				vm.datosPj={
					generacion:13,
					modulos:[]				};
				//Esta función debe ejecutarse cada vez que actualicemos la generación del personaje
				vm.cambioGeneracion = function() {

		            var ajuste = function(maximo){
						//Recorremos el array de modulos y actualizamos el máximo siempre que este sea editable
		                for (var i=0; i<vm.datosPj.modulos.length; i++){
							if (vm.datosPj.modulos[i].maximo.editable) {
								vm.datosPj.modulos[i].maximo.valor = maximo;

								//Recorremos el vector de valores del módulo para ajustar su valor al máximo posible
								for (var j = 0; j < vm.datosPj.modulos[i].valor.length; j++) {
									if (vm.datosPj.modulos[i].valor[j] > vm.datosPj.modulos[i].maximo.valor) {
										vm.datosPj.modulos[i].valor[j] = maximo;
									}
								}
							}
		                }
		            };
					//Ajustamos el valor máximo de los datos dependiendo de la generación del personaje
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

				//Añadimos un Watch al modelo generación para que ejecute la funcion de actualización
				// siempre que se detecte un cambio en el modelo
                $scope.$watch(function(){return vm.datosPj.generacion;},vm.cambioGeneracion);
			},
			templateUrl:'templates/rasgoGeneracion.html'
		};
	}
	
})(angular);