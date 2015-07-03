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
        vm.fichaVampiro = {

            "generacion":9,
            "modulos":[
                {
                    "nombre":"Físicos",
                    "rasgo":["Fuerza","Destreza","Resistencia"],
                    "valor":[0,0,0],
                    "maximo":5,
                    "tipo":"topos"
                },
                {
                    "nombre":"Físicos",
                    "rasgo":["Carisma","Manipulación","Apariencia"],
                    "valor":[0,0,0],
                    "maximo":5

                },
                {
                    "nombre":"Físicos",
                    "rasgo":["Percepción","Inteligencia","Astucia"],
                    "valor":[0,0,0],
                    "maximo":5
                }
            ]

        };
        vm.datosPj=vm.fichaVampiro;
        vm.generacion=vm.datosPj.generacion;
        vm.max=5;

        //Lógica de relación generacion / max atributo
        //ficha.getFicha().then(function (data){
        //    vm.datosPj = data;
        //    vm.generacion =data.generacion;
        //});

        vm.cargarDatos = function() {

            vm.datosPj = ficha.getFicha();
            vm.generacion=vm.datosPj.generacion;
            console.log('He cargado los datos');
        };

        vm.reset = function() {
            vm.datosPj=vm.fichaVampiro;

        };

        this.cambioGeneracion = function() {
            var ajuste = function(valor){
                for (var i=0; i<vm.datosPj.modulos.length; i++){
                    vm.datosPj.modulos[i].maximo=valor;
                }
            };
            switch (this.generacion) {
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

//        this.cambioGeneracion();

    }



})(window.angular);

