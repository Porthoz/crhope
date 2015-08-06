/**
 * Created by porthos on 31/07/15.
 */

(function (angular){
    angular.module('crhope')
        .directive('senda',['topos',rasgoSenda]);

    function rasgoSenda(){

        function Controller($scope,topos){
            var vm = $scope;


            Object.defineProperty($scope,
                'valor',{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return this._valor;
                    },
                    set: function (val) {
                        this._valor =val;
                        this.vectorSenda=topos.generarPuntos(val);
                    }

                });
            
            vm.nombre='Senda';
            vm._valor=0;
            vm.vectorSenda=topos.generarPuntos(vm.valor);

            vm.setValor= function (val) {
                if (val === vm.valor){
                    vm.valor=0;
                }else{
                    vm.valor=val;

                }
            }


        }

        return {
            restrict:'E',
            scope: {
                senda:'=',
                valor:'='
            },
            controller:Controller,
            templateUrl:'templates/fpSenda.html'
        }
    }

})(window.angular);
