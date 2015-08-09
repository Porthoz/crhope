
(function (angular){
    'use strict';
    angular.module('crhope')
        .directive('wodEtiqueta',textoEditable);

    function textoEditable(){

        return {
            restrict:'E',
            scope:{
                rasgo:'=',
                valor:'='
            },
            controllerAs:'vm',
            transclude:true,
            controller:Controller ,
            templateUrl:'app/fichaPersonaje/wodWidgets/wodEtiqueta.html'

        };

        function Controller ($scope){
            var vm = $scope;
            vm.addRasgo=addRasgo;
            vm.delRasgo=delRasgo;

            vm.bloqueado=false;

            vm.addRasgo = function (n) {
                if (n === undefined){
                    vm.rasgo.push('');
                    vm.valor.push('')
                }else {
                    vm.rasgo.splice(n,0,'');
                    vm.valor.splice(n,0, '');
                }


            };

            vm.delRasgo = function (n){
                vm.rasgo.splice(n,1);
                vm.valor.splice(n,1);
            };


        }

    }

})(angular);