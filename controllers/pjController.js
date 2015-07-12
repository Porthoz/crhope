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
                vm.cambioGeneracion();
                //vm.generacion =data.generacion;
            });

            console.log('He cargado los datos');
        };

        vm.reset = function() {
            vm.datosPj=ficha.fichaVacia();
            vm.cambioGeneracion();

        };

        vm.cambioGeneracion = function() {

            var ajuste = function(maximo){
                for (var i=0; i<vm.datosPj.modulos.length; i++){
                    vm.datosPj.modulos[i].maximo=maximo;

                    for (j=0; j<vm.datosPj.modulos[i].valor.length; j++){
                        if (vm.datosPj.modulos[i].valor[j]>maximo) {
                            vm.datosPj.modulos[i].valor[j]=maximo;
                        }
                    }
                }
            };
            switch (vm.datosPj.generacion) {
                case(7):
                    ajuste(6);
                    break;
                case(6):
                    ajuste(7);
                    break;
                case(5):
                    ajuste(8);
                    break;
                case(4):
                    ajuste(9);
                    break;
                case(3):
                    ajuste(10);
                    break;
                case(null):
                    break;
                default:
                    ajuste(5);
            }

        };

    }



})(window.angular);

