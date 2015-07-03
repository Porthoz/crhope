/**
 * Created by porthos on 8/05/15.
 */
(function(angular){

    'use strict'; //nos ponemos serios

    angular.module('crhope')
        .directive('topos',rasgoTopos);


    function rasgoTopos() {
        return {
            restrict: 'E',
            replace:true,
            scope:{
                modulo:'='
                //max:'='
            },


            controller:function ($scope){

                var marked ='marcado';
                var unmarked = 'desmarcado';
                var vm =$scope; // Todo mas clarito
                vm.matrizDePuntos =[];
                //inicializo los nombres de los ragos separandolos en un vector

                //inicializo la matriz que represanta los puntos



                vm.actualizar = function(){
                    for (var v=0;v<vm.modulo.rasgo.length;v++){
                        vm.matrizDePuntos[v] = [];
                        for (var i=0;i<vm.modulo.maximo;i++){
                            if (vm.modulo.valor[v]>i){
                                vm.matrizDePuntos[v].push(marked)
                            }else{
                                vm.matrizDePuntos[v].push(unmarked);
                            }

                        }
                    }
                };
                    //console.log(vm.matrizDePuntos);
                // Que estoy pulsando??
                vm.alerta = function (msg){
                    alert(msg);
                };

                //Método para asignar valor a la matriz
                vm.asignarValor =function (rasgo,valor){
                    if (valor===(vm.modulo.valor[rasgo]-1)){
                        //var temp=valor+1;
                        valor=-1;
                    }
                    var r = rasgo;
                    vm.modulo.valor[rasgo]=valor+1;
                    for (var i=0;i<vm.matrizDePuntos[r].length;i++){
                        if (i<=valor){
                            vm.matrizDePuntos[r][i]=marked;
                        } else{
                            vm.matrizDePuntos[r][i]=unmarked;
                        }
                    }

                    //vm.matrizDePuntos[0][3]=marked;
                };

                // método para actualizar el tamaño de la matriz cuando se cambia de generación.
                vm.ajustarMatriz=function(){

                    for (var i =0; vm.matrizDePuntos[i]; i++){
                        ajustarVector(i);
                    }

                    function ajustarVector (v){

                        if (vm.max!==null){
                            for (var i=0;vm.matrizDePuntos[v].length<vm.max;i++){
                                anhadirPunto(v);
                            }
                            for (var m=0;vm.matrizDePuntos[v].length>vm.max;m++){
                                quitarPunto(v);
                            }
                        }

                        function anhadirPunto(n){
                            vm.matrizDePuntos[n].push(unmarked);
                        }

                        function quitarPunto(n){
                            if (vm.matrizDePuntos[n].length>1){
                                vm.matrizDePuntos[n].pop();
                            }
                        }
                    }

                };



            //watches sobre max para actualizar la matriz de vectores
                //$scope.$watch(function(){return vm.max;},vm.ajustarMatriz);
                $scope.$watch(function(){return vm.modulo;},vm.actualizar, vm.ajustarMatriz);

            },
            templateUrl:'templates/rasgo-topos.html'

        };



    }




})(window.angular);

