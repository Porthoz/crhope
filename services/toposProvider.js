/**
 * Created by porthos on 31/07/15.
 */
(function (angular){
    angular.module('crhope')
        .factory('topos',topos);

    function topos(){
        var marked="marcado";
        var unmarked="desmarcado";
        var toposFactory={};

        toposFactory.generarVector= function (valor) {
            var temp=[];
            for (var i=0; i<10;i++){
                if (valor>i) {temp.push(marked)}
                else{temp.push(unmarked)}
            }

            return temp;
        };

        toposFactory.generarReserva = function (generacion,valor){
            var max=0;
            var vector=[];
            switch (generacion) {
                case(13):
                    max = 10;
                    break;
                case(12):
                    max = 11;
                    break;
                case(11):
                    max = 12;
                    break;
                case(10):
                    max = 13;
                    break;
                case(9):
                    max = 14;
                    break;
                case(8):
                    max = 15;
                    break;
                case(7):
                    max = 20;
                    break;
                case(6):
                    max = 30;
                    break;
                case(5):
                    max = 40;
                    break;
                case(4):
                    max = 50;
                    break;
                case(3):
                    max = 50;
                    break;
                default:
                    max=10;
            }

            for(var i=0;i<max;i++){
                if (i < valor){
                    vector.push(marked);
                }else{
                    vector.push(unmarked);
                }
            }
            return vector;


        };
        return toposFactory;
    }

})(window.angular);