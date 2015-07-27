/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',["xeditable"])

        .controller ('pjController', ['ficha',pjController])
        .run (function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3. También puede ser 'bs2', 'default'
        });

    //angular.reloadWithDebugInfo();
 //Función pjController
    function pjController(ficha){
        var vm = this;

        //vm.datosPj=ficha.fichaVacia();

        ficha.getPlantilla().then(
            function (data){

                vm.datosPj=data;

            }
        );
        //vm.maximo=6;

        vm.cargarDatos = function() {

            ficha.getFicha().then(function (data){
                vm.datosPj = data;
            });

            console.log('He cargado los datos');
        };

        vm.reset = function() {
            ficha.getPlantilla().then(
                function (data){

                    vm.datosPj=data;

                })
        };


        vm.bloqueo = function() {

            for (var i =0; i < vm.datosPj.modulos.length;i++){

            }
        }



    }



})(window.angular);

