/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',["xeditable"])

        .controller ('pjController', ['ficha',pjController])
        .run (function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3. También puede ser 'bs2', 'default'
        });


 //Función pjController
    function pjController(ficha){
        var vm = this;

        vm.datosPj=ficha.getPlantilla();

        vm.cargarDatos = function() {

            ficha.getFicha().then(function (data){
                vm.datosPj = data;
            });

        };

        vm.reset = function() {
            vm.datosPj=ficha.getPlantilla();
        };






    }



})(window.angular);

