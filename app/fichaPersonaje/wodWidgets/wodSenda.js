/**
 * Created by porthos on 31/07/15.
 */

(function (angular){
    angular.module('crhope')
        .directive('wodSenda',['wwService',wodSenda]);

    function wodSenda(){

        return {
            restrict:'E',
            scope: {
                senda:'=',
                valor:'='
            },
            controller:Controller,
            controllerAs:'vm',
            bindToController:true,
            templateUrl:'app/fichaPersonaje/wodWidgets/wodSenda.html'
        };

        function Controller(wwService){
            var vm = this;
            vm.vectorSenda=wwService.generarPuntos(vm.valor,10);
            vm.setValor=setValor;

            ////////////////////////

            var _valor=vm.valor;
            Object.defineProperty(vm,
                'valor',{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return _valor;
                    },
                    set: function (val) {
                        _valor =val;
                        vm.vectorSenda=wwService.generarPuntos(val,10);
                    }

                });

            function setValor (val) {
                if (val === vm.valor){
                    vm.valor=0;
                }else{
                    vm.valor=val;

                }
            }


        }


    }

})(window.angular);
