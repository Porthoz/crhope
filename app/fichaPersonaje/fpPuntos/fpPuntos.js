(function(angular){

    'use strict';

    angular.module('crhope.fichaPersonaje')
        .directive('bloqueado',toposBloquear)
        .directive('fpPuntos',rasgoTopos);


    function rasgoTopos() {

        var marked ='topo marcado';
        var unmarked = 'topo desmarcado';

        function Controller ($scope){

            var vm =$scope; //

            //vm.modulo=moduloInicial;
            vm.bloqueado= false;
            vm.matrizDeValores =[];
            vm._maximo=5;

            this.bloquear =function(){
                vm.bloqueado =true
            };



            Object.defineProperty($scope,
                "maximo",{
                    enumerable:true,
                    configurable:false,
                    get:function(){
                        return this._maximo;
                    },
                    set:function(val){
                        this._maximo=val;
                        this.actualizar();
                    }
                }
            );


            //Añade un rasgo al módulo y rellena la matriz
            vm.anhadirRasgo = function (n) {
                if (n === undefined){
                    vm.modulo.rasgo.push("");
                    vm.modulo.valor.push(0)
                }else {
                    vm.modulo.rasgo.splice(n,0,'');
                    vm.modulo.valor.splice(n,0, 0);
                }
            };

            //quita un rasgo del módulo
            vm.quitarRasgo = function (n){
                vm.modulo.rasgo.splice(n,1);
                vm.modulo.valor.splice(n,1);
            };


            // Que estoy pulsando??
            vm.alerta = function (msg){
                console.log(msg);
            };

            //Método para asignar valor a un rasgo
            vm.asignarValor =function (rasgo,valor){

                if (valor===(vm.modulo.valor[rasgo]-1)){
                    valor=-1;
                }
                vm.modulo.valor[rasgo]=valor+1;

            };

            //Actualiza la matriz de puntos para que represente los valores cuando estos sean modificados.
            vm.actualizar = function(){
                for (var v=0;v<vm.modulo.rasgo.length;v++){
                    vm.matrizDeValores[v] = [];
                    for (var i=0;i<vm.maximo;i++){
                        if (vm.modulo.valor[v]>i){
                            vm.matrizDeValores[v].push(marked)
                        }else{
                            vm.matrizDeValores[v].push(unmarked);
                        }

                    }
                }
            };


            //$scope.$watch(function($scope){return $scope.modulo.valor}, vm.actualizar,true);
            $scope.$watch('vm.modulo.valor',function (viejo,nuevo){
                    console.log('estoy en el watch');
                    vm.actualizar();
                },true);


        }

        return {
            restrict: 'E',
            scope:{
                modulo:'=',
                maximo:'='
            },
            //bindToController:true,
            //bindToController:{
            //    modulo:'=',
            //    maximo:'='
            //},
            controller:Controller,
            controllerAs:'vm',
            templateUrl:'fichaPersonaje/fpPuntos/fpPuntos.html'

        };
    }

    //otra directiva
    function toposBloquear(){
        return{
            require:'topos',
            link:function (scope, elem, attrb, toposCtrl){
                toposCtrl.bloquear();
                console.log(attrb);
            }
        }
    }


})(window.angular);

