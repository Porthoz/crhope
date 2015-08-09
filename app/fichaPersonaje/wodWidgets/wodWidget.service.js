(function (angular){
    angular.module('crhope.fichaPersonaje')
        .factory('wwService',wwService);

    function wwService(){

        var marked="marcado";
        var unmarked="desmarcado";
        var widgetService={};

        widgetService.generarPuntos= generarPuntos; //genera un vector de puntos marcado o desmarcado según valor
        widgetService.generarReserva = generarReserva; //genera un vector de la reserva de sangre.
        widgetService.generarMatriz =generarMatriz; //genera una matriz de topos marked/unmarked


        ///////////////////////

        function generarReserva (generacion,valor){
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


        }


        function generarPuntos(valor,maximo) {
            var vector=[];
            for (var i=0; i<maximo;i++){
                if (valor>i) {vector.push(marked)}
                else{vector.push(unmarked)}
            }

            return vector;
        }

        function generarMatriz(M,N,valor){
            var matriz=[];
            for (var i=0;i<M;i++){
                matriz[i]=generarPuntos(valor[i],N);
            }
            return matriz;
        }


        return widgetService;
    }

})(window.angular);