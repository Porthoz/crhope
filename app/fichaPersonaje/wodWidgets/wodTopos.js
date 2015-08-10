(function(angular){

    'use strict';

    angular.module('crhope.fichaPersonaje')
        .directive('bloqueado',toposBloquear)
        .directive('wodTopos',['wwService',wodTopos]);


    function wodTopos(wwService) {

        return {
            restrict: 'E',
            scope:{
                modulo:'=',
                maximo:'='
            },
            controller:Controller,
            controllerAs:'vm',
            bindToController:true,
            templateUrl:'app/fichaPersonaje/wodWidgets/wodTopos.html'

        };

        function Controller (){
            var vm =this; //
            var marked ='topo marcado';
            var unmarked = 'topo desmarcado';

            vm.bloqueado= false;
            vm.matrizDeValores =[];

            vm.addRasgo=addRasgo; //Añade un rasgo al módulo y rellena la matriz
            vm.subsRasgo=subsRasgo; //quita un rasgo del módulo
            vm.setValor=setValor; //Método para asignar valor a un rasgo
            vm.actualizarMatriz=actualizarMatriz; //Actualiza la matriz de puntos para que represente los valores cuando estos sean modificados.

        ////////////////////////

            vm.actualizarMatriz();

            var _maximo=vm.maximo;
            Object.defineProperty(vm,
            'maximo',{
                    enumerable:true,
                    configurable:false,
                    get:function (){return _maximo},
                    set:function(val){
                        _maximo=val;
                        for (var i=0;i<vm.modulo.valor.length;i++){
                            if (vm.modulo.valor[i]>val){vm.modulo.valor[i]=val;}
                        }
                        vm.actualizarMatriz();
                    }
                });

            vm.bloquear =function(){
                vm.bloqueado =true
            };


            function addRasgo (n) {
                if (n === undefined){
                    vm.modulo.rasgo.push("");
                    vm.modulo.valor.push(0)
                }else {
                    vm.modulo.rasgo.splice(n,0,'');
                    vm.modulo.valor.splice(n,0, 0);
                }
                vm.actualizarMatriz();
            }

            function subsRasgo (n){
                vm.modulo.rasgo.splice(n,1);
                vm.modulo.valor.splice(n,1);
                vm.actualizarMatriz();
            }

            function setValor (rasgo,valor){

                if (valor===(vm.modulo.valor[rasgo]-1)){
                    valor=-1;
                }
                vm.modulo.valor[rasgo]=valor+1;

            }

            function actualizarMatriz(){
                vm.matrizDeValores=wwService.generarMatriz(vm.modulo.rasgo.length,vm.maximo,vm.modulo.valor)
            }
        }

    }

    //otra directiva
    function toposBloquear(){
        return{
            require:'wodTopos',
            link:function (scope, elem, attrb, toposCtrl){
                toposCtrl.bloquear();
                console.log(attrb);
            }
        }
    }


})(window.angular);

