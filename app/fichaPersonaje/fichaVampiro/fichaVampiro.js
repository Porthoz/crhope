(function (angular){
    angular.module('crhope')
        .controller('fichavampiro',FichaVampiroCtrl);

    FichaVampiroCtrl.$inject=['vampiro'];



        function FichaVampiroCtrl(vampiro){
            var vm= this;
            vm.ficha = vampiro.ficha;

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

})(window.angular);