/**
 * Created by porthos on 8/05/15.
 */
(function(angular){

    'use strict'; //nos ponemos serios

    angular.module('crhope')

        .directive('bloqueado',toposBloquear)
        .directive('topos',rasgoTopos);


    function rasgoTopos() {
        return {
            restrict: 'E',
            replace:true,
            priority:1,
            scope:{
                modulo:'='
                //max:'='
            },
            controller:function ($scope){

                var marked ='marcado';
                var unmarked = 'desmarcado';

                var vm =$scope; // Todo mas clarito
                //vm.visibilidad =false;
                vm.bloqueado= false;
                vm.matrizDePuntos =[];


                //Añade un rasgo a la matriz
                vm.anhadirRasgo = function (n) {
                    if (n === undefined){
                        vm.modulo.rasgo.push("");
                        vm.modulo.valor.push(0)
                    }else {
                        vm.modulo.rasgo.splice(n,0,'');
                        vm.modulo.valor.splice(n,0, 0);
                    }


                };

                //quita un rasgo
                vm.quitarRasgo = function (n){
                    vm.modulo.rasgo.splice(n,1);
                    vm.modulo.valor.splice(n,1);
                };


            //Actualiza la matriz de puntos.
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

                // Que estoy pulsando??
                vm.alerta = function (msg){
                    console.log(msg);
                };

                //Método para asignar valor a la matriz
                vm.asignarValor =function (rasgo,valor){
                    //if (vm.bloqueado===true) return;
                    if (valor===(vm.modulo.valor[rasgo]-1)){
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
                $scope.$watch(function(){return vm.modulo;},vm.actualizar, vm.ajustarMatriz);

            },
            templateUrl:'templates/rasgo-topos.html'


        };


    }
    function toposBloquear(){
        return{
            require:'topos',
            priority:0,
            link:function(scope,elem,attrb,toposCtrl){
                //toposCtrl.bloqueado=true;
                console.log('estoy aki');
                toposCtrl.cosicosa='kakota';
                console.log(toposCtrl.cosicosa);


            }
        }
    }




})(window.angular);

