/**
 * Created by porthos on 8/05/15.
 */
(function(angular){

    'use strict'; //nos ponemos serios

    angular.module('appFicha')
        .directive('topos',rasgoTopos);


    function rasgoTopos() {
        return {
            restrict: 'E',
            scope:{
                rasgos:'@',
                max:'='
            },


            controller:function ($scope){

                var marked ='black';
                var unmarked = 'white';
                var vm =$scope; // Todo mas clarito



                //inicializo los nombres de los ragos separandolos en un vector
                vm.nombreRasgo = vm.rasgos.split(',');

                //inicializo la matriz que represanta los puntos
                vm.matrizDePuntos =[];
                for (var v=0;v<vm.nombreRasgo.length;v++){
                    vm.matrizDePuntos[v] = [unmarked];

                    for (var i=1;i<vm.max;i++){
                        vm.matrizDePuntos[v].push(unmarked);
                    }
                }

                // Que estoy pulsando??
                vm.alerta = function (msg){
                    alert(msg);
                };

                //Método para asignar valor a la matriz
                vm.asignarValor =function (rasgo,valor){
                    var r = vm.nombreRasgo.indexOf(rasgo);
                    for (var i=0;i<vm.matrizDePuntos[r].length;i++){
                        if (i<=valor){
                            vm.matrizDePuntos[r][i]=marked;
                        } else{
                            vm.matrizDePuntos[r][i]=unmarked;
                        }
                    }

                    //vm.matrizDePuntos[0][3]=marked;
                };
                // método para actualizar el tamaño de la matriz
                vm.ajustarMatriz=function(){

                    for (var i =0; vm.matrizDePuntos[i]; i++){
                        ajustarVector(i);
                    }

                    function ajustarVector (v){

                        function anhadirPunto(n){
                            vm.matrizDePuntos[n].push(unmarked);
                        }

                        function quitarPunto(n){
                            if (vm.matrizDePuntos[n].length>1){
                                vm.matrizDePuntos[n].pop();
                            }
                        }

                        if (vm.max!==null){
                            for (var i=0;vm.matrizDePuntos[v].length<vm.max;i++){
                                anhadirPunto(v);
                            }
                            for (var m=0;vm.matrizDePuntos[v].length>vm.max;m++){
                                quitarPunto(v);
                            }
                        }
                    }

                };



            //watches sobre max para actualizar la matriz de vectores
            $scope.$watch(function(){return vm.max;},vm.ajustarMatriz);

            },
            templateUrl:'templates/tablaPuntosSvg.html'

        };

    }




})(window.angular);

