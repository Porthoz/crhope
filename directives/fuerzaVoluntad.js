/**
 * Created by porthos on 21/07/15.
 */

(function (angular){
    'use strict';

    angular.module('crhope')
        .directive('fuerzaVoluntad',fuerzaVoluntad);

    function fuerzaVoluntad(){

        function Controller ($scope){
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
                        if (val <= this.permanente){
                            this._temporal=val;
                            this.arrayTemporal=generarVector(val);
                        }

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
                        this.arrayPermanente=generarVector(val);

                        if (this.temporal > val){
                            this.arrayTemporal=generarVector(val);
                        }
                    }
                }
            );

            var generarVector =function(valor){
                var temp=[];
                for (var i=0; i<10;i++){
                    if (valor>i) {temp.push(marked)}
                    else{temp.push(unmarked)}
                }
                console.log('estoy en generarTemporal')
                return temp;

            };

            vm.nombre="Fuerza de Voluntad";
            vm._temporal=3;
            vm._permanente=6;
            vm.arrayTemporal = generarVector(vm.temporal);
            vm.arrayPermanente = generarVector(vm.permanente);

            vm.setTemporal= function (val) {
                vm.temporal=val;
            };

            vm.setPermanente= function (val) {
                vm.permanente=val;
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
