(function(angular){
    angular.module('crhope.fichaPersonaje')
        .factory('vampiro',['dataservice',vampiro]);

    function vampiro(dataservice){

        return{

            getFicha:getFicha, //recupera la ficha de la BD
            calcularReserva:calcularReserva, //Calcula la reserva de sangre en funcion de la generación
            calcularLimiteAtb:calcularLimiteAtb //Calcula el límite de valor de atributos en función de la generación

        };


        ///////////////////////

        function getFicha(){
            var ficha=dataservice.getVampiro();
            ficha.reserva.maximo=calcularReserva(ficha.generacion);
            ficha.limiteAtb=calcularLimiteAtb(ficha.generacion);
            return ficha;
        }

        function calcularReserva(generacion){
            var max=null;
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
            return max;
        }

        function calcularLimiteAtb(generacion){
            var maximo=null;
            switch (generacion) {
                case(7):
                    maximo=6;
                    break;
                case(6):
                    maximo=7;
                    break;
                case(5):
                    maximo=8;
                    break;
                case(4):
                    maximo=9;
                    break;
                case(3):
                    maximo=10;
                    break;
                case(null):
                    break;
                default:
                    maximo=5;
            }
            return maximo;

        }

    }

})(window.angular);
