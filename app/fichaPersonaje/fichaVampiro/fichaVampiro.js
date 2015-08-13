(function (angular){
    angular.module('crhope')
        .directive('fichaVampiro',fichaVampiro);

    fichaVampiro.$inject=['vampiro'];

    function fichaVampiro(){

        return{
            restricted:'E',
            controller:FichaVampiroCtrl,
            controllerAs:'vm',
            bindToController:true,
            templateUrl:'app/fichaPersonaje/fichaVampiro/fichaVampiro.html'

        };

    }

    function FichaVampiroCtrl(vampiro){
        var vm= this;

        vm.ficha= vampiro.getFicha();
        //vampiro.init('soy un dato inicializado en el controller');
        console.log(vampiro.getDato());


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