(function(angular){
    'use strict';
    angular.module('crhope.fichaPersonaje')
        .directive('wodReserva',reserva);

    reserva.$inject=['wwService'];
    function reserva (){

        return{
            restrict:'E',
            controller:ReservaCtrl,
            controllerAs:'vm',
            bindToController:true,
            scope:{
                maximo:'=',
                valor:'='
            },
            templateUrl:'app/fichaPersonaje/wodWidgets/wodReserva.html'
        };

        function ReservaCtrl(wwService){
            var vm = this;

            vm.cuadrados=wwService.generarPuntos(vm.valor,vm.maximo);
            vm.bloqueado=false;
            vm.setValor=setValor; //asigna un valor a la reserva de sangre. setValor(valor)
            vm.actualizarModelo=actualizarModelo; //genera un nuevo modelo de puntos para el DOM
            vm.bloquear=bloquear;

        ////////////////////

            function setValor (val){
                if (val<=vm.maximo){

                    if (vm.valor===val){
                        vm.valor=0;
                    }else{

                        vm.valor=val;
                    }
                    actualizarModelo();
                }
            }

            function actualizarModelo (){

                vm.cuadrados=wwService.generarPuntos(vm.valor,vm.maximo);
            }

            var _maximo=vm.maximo;
            Object.defineProperty(vm,
                'maximo',{
                    enumerable:true,
                    configurable:false,
                    get:function(){return _maximo},
                    set:function(val){
                        _maximo=val;
                        if (val<vm.valor){
                            vm.valor=val;
                        }
                        vm.actualizarModelo();
                    }

                });

            function bloquear(){
                vm.bloqueado=true;
            }
        }




    }

})(window.angular);
