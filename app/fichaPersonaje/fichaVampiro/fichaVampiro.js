(function (angular){
    angular.module('crhope')
        .directive('fichaVampiro',['vampiro',fichaVampiro]);

    function fichaVampiro(vampiro){

        return{
            restricted:'E',
            controller:Controller,
            controllerAs:'vm',
            bindToController:true,
            templateUrl:'app/fichaPersonaje/fichaVampiro/fichaVampiro.html'

        };


        function Controller(){
            var vm= this;

            vm.ficha= vampiro.getFicha();
            var _generacion= vm.ficha.generacion;

            Object.defineProperty(vm.ficha,
            'generacion',{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return _generacion
                    },
                    set:function(value){
                        _generacion=value;
                        vm.ficha.reserva.maximo=vampiro.calcularReserva(value);
                        vm.ficha.limiteAtb=vampiro.calcularLimiteAtb(value);
                    }
                });

        }


    }


})(window.angular);