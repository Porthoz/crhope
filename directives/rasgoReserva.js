(function(angular){
    'use strict';
    angular.module('crhope')
        .directive('reserva',['topos',reserva]);

    function reserva (){



        function Controller($scope,topos){
            var vm = $scope;

            vm._generacion=vm.generacion;
            vm._valor=vm.valor;
            vm.reserva=topos.generarReserva(vm.generacion,vm.valor);
            vm.bloqueado=false;

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
                            if (this.reserva.length<this.valor){
                                this.valor=this.reserva.length;
                            }
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
                generacion:'=',
                valor:'='

            },
            templateUrl:'templates/rasgoReserva.html'
        }
    }

})(window.angular);
