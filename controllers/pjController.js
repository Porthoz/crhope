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
        vm.datosPj = {
            "generacion":9,
            "atributosFisicos":
            {
                "Nombre":["Fuerza","Destreza","Resistencia"],
                "Valor":[0,0,0],
                "maximo":5
            },

            "atributosSociales":
            {
                "Nombre":["Carisma","Manipulación","Apariencia"],
                "Valor":[0,0,0],
                "maximo":5

            },
            "atributosMentales":
            {
                "Nombre":["Percepción","Inteligencia","Astucia"],
                "Valor":[0,0,0],
                "maximo":5
            }
        };
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

        };

        this.cambioGeneracion = function() {
            switch (this.generacion) {
                case(7):
                    this.max=6;
                    break;
                case(6):
                    this.max=7;
                    break;
                case(5):
                    this.max=8;
                    break;
                case(4):
                    this.max=9;
                    break;
                case(3):
                    this.max=10;
                    break;
                case(null):
                    break;
                default:
                    this.max=5;
            }

        };

        this.cambioGeneracion();

    }



})(window.angular);

