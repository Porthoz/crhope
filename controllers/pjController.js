/**
 * Created by porthos on 8/05/15.
 */

(function (angular){


    angular.module('appFicha',["xeditable"])
        .controller ('pjController', pjController)
        .run (function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });

    function pjController(){
        this.max=5;
        this.generacion=13;
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

    }

})(window.angular);