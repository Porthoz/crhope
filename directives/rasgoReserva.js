(function(angular){
    'use strict';
    angular.module('crhope')
        .directive('reserva',['topos',reserva]);

    function reserva (){

        function Controller($scope,topos){
            var vm = $scope;

            vm._generacion=13;
            vm._valor=0;
            vm.generacion=13;
            vm.valor=0;
            vm.reserva=topos.generarReserva(vm.valor,vm.generacion);

            Object.defineProperties($scope,
                {
                    'generacion': {
                        enumerable: true,
                        configurable: false,
                        get: function () {
                            return this._generacion
                        },
                        set: function (val) {

                            this._generacion = val;
                            this.reserva = topos.generarReserva(val,this.valor);
                            console.log('generando reserva, generacion');

                        }

                    },

                    'valor': {
                        enumerable: true,
                        configurable: false,
                        get: function () {
                            return this._valor
                        },
                        set: function (val) {

                            this._valor = val;
                            this.reserva = topos.generarReserva(this.generacion,val);
                            console.log('generando reserva, valor');

                        }

                    }
                });
            vm.setValor=function (val){
                if (vm.valor===val){
                    vm.valor=0;
                }else{

                    vm.valor=val;
                }
            };




        }
        return{
            restrict:'E',
            controller:Controller,
            scope:{
                generacion:'='
            },
            templateUrl:'templates/rasgoReserva.html'
        }
    }

})(window.angular);
