(function (angular){
    'use strict';

    angular.module('crhope')
        .directive('wodVoluntad',['wwService',wodVoluntad]);

    function wodVoluntad(){

        return {
            restrict:'E',
            scope:{
                temporal:'=',
                permanente:'='
            },
            controllerAs:'vm',
            bindToController:true,
            controller: Controller,
            templateUrl:'app/fichaPersonaje/wodWidgets/wodVoluntad.html'

        };

        function Controller (wwService){

            var vm =this;

            vm.setTemporal=setTemporal;
            vm.setPermanente=setPermanente;

            ////////////////////////////

            vm.nombre="Fuerza de Voluntad";
            vm.arrayTemporal=wwService.generarPuntos(vm.temporal,10);
            vm.arrayPermanente=wwService.generarPuntos(vm.permanente,10);

            var _temporal=vm.temporal;
            var _permanente=vm.permanente;
            Object.defineProperty(vm,
                "temporal",{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return _temporal;
                    },
                    set:function(val){
                            _temporal=val;
                            vm.arrayTemporal=wwService.generarPuntos(val,10);
                    }
                }
            );

            Object.defineProperty(vm,
                "permanente",{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return _permanente;
                    },
                    set:function(val){
                        _permanente=val;
                        vm.arrayPermanente=wwService.generarPuntos(val,10);
                        if (vm.temporal > val){
                            vm.temporal=val;
                        }
                    }
                }
            );


           function setTemporal (val) {
                if (val === vm.temporal){
                    vm.temporal=0;
                }else {

                    if (val <= vm.permanente){
                        vm.temporal=val;
                    }
                }


            }

            function setPermanente (val) {
                if (val === vm.permanente){
                    vm.permanente=0;
                }else {
                    vm.permanente=val;
                }
            }



        }


    }

})(window.angular);
