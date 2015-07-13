/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',["xeditable"])

        .controller ('pjController', ['ficha',pjController])
        .run (function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });


 //Funcion pjController
    function pjController(ficha){
        var vm = this;
        vm.datosPj=ficha.fichaVacia();
        
        vm.cargarDatos = function() {

            ficha.getFicha().then(function (data){
                vm.datosPj = data;
            });

            console.log('He cargado los datos');
        };

        vm.reset = function() {
            vm.datosPj=ficha.fichaVacia();
        };

        vm.bloqueo = function() {

            for (var i =0; i < vm.datosPj.modulos.length;i++){

            }
        }



    }



})(window.angular);

