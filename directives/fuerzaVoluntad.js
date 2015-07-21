/**
 * Created by porthos on 21/07/15.
 */

(function (angular){
    'use strict';

    angular.module('crhope')
        .directive('fuerzaVoluntad',fuerzaVoluntad);

    function fuerzaVoluntad(){

        return {
            restrict:'E',
            scope:{
                modulo:'='
            },
            controller: function($scope){
                var marked="topo marcado";
                var unmarked="topo desmarcado";
                var vm =$scope;
                vm.matrizDeValores=[];

                vm.actualizar = function(){
                    for (var v=0;v<vm.modulo.rasgo.length;v++){
                        if (vm.modulo.rasgo[v]==='texto'){ vm.matrizDeValores[v]=null; console.log('es texto')}
                        else{
                            vm.matrizDeValores[v] = [];
                            for (var i=0;i<vm.modulo.maximo;i++){
                                if (vm.modulo.valor[v]>i){
                                    vm.matrizDeValores[v].push(marked)
                                }else{
                                    vm.matrizDeValores[v].push(unmarked);
                                }

                            }
                        }


                    }
                };

                $scope.$watch(function(){return vm.modulo;},$scope.actualizar);


            },
            templateUrl:'templates/fuerzaVoluntad.html'

        }
    }

})(angular);
