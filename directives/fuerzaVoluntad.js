/**
 * Created by porthos on 21/07/15.
 */

(function (angular){
    'use strict';

    angular.module('crhope')
        .directive('fuerzaVoluntad',['topos',fuerzaVoluntad]);

    function fuerzaVoluntad(){

        function Controller ($scope,topos){
            var marked="marcado";
            var unmarked="desmarcado";
            var vm =$scope;

            Object.defineProperty($scope,
                "temporal",{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return this._temporal;
                    },
                    set:function(val){

                            this._temporal=val;
                            this.arrayTemporal=topos.generarVector(val);


                    }
                }
            );

            Object.defineProperty($scope,
                "permanente",{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return this._permanente;
                    },
                    set:function(val){
                        this._permanente=val;
                        this.arrayPermanente=topos.generarVector(val);

                        if (this.temporal > val){
                            this.temporal=val;
                        }
                    }
                }
            );


            vm.nombre="Fuerza de Voluntad";
            vm._temporal=10;
            vm._permanente=10;
            //vm.arrayTemporal = generarVector(vm.temporal);
            //vm.arrayPermanente = generarVector(vm.permanente);

            vm.setTemporal= function (val) {
                if (val === vm.temporal){
                    vm.temporal=0;
                }else {

                    if (val <= vm.permanente){
                        vm.temporal=val;
                    }
                }


            };

            vm.setPermanente= function (val) {
                if (val === vm.permanente){
                    vm.permanente=0;
                }else {
                    vm.permanente=val;
                }
            };



        }

        return {
            restrict:'E',
            scope:{
                temporal:'=',
                permanente:'='
            },
            controller: Controller,
            templateUrl:'templates/fuerzaVoluntad.html'

        };
    }

})(window.angular);
