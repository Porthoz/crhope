/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',[
        'crhope.fichaPersonaje',
        'crhope.core'
    ])

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

        vm.generacion=7;
        vm.numero=6;
        vm.numero2=6;
        vm.moduloPrueba={
            "nombre":"Físicos",
            "rasgo":["Fuerza","Destreza","Resistencia"],
            "valor":[1,1,1],
            "maximo":{"valor":5,"editable":true},
            "bloqueado":{"valor":false,"editable":true},
            "tipo":"topos"
        }




    }



})(window.angular);

