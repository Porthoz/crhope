/**
 * Created by porthos on 20/07/15.
 */
(function (angular){
    'use strict';
    angular.module('crhope')
        .directive('textoEditable',textoEditable);

    function textoEditable(){

        return {
            restrict:'E',
            scope:{
                modulo:'='
            },
            transclude:true,
            controller: function($scope){
                var vm = $scope;
                vm.bloqueado=false;

                vm.anhadirRasgo = function (n) {
                    if (n === undefined){
                        vm.modulo.rasgo.push('');
                        vm.modulo.valor.push('')
                    }else {
                        vm.modulo.rasgo.splice(n,0,'');
                        vm.modulo.valor.splice(n,0, '');
                    }


                };

                vm.quitarRasgo = function (n){
                    vm.modulo.rasgo.splice(n,1);
                    vm.modulo.valor.splice(n,1);
                };


            },
            templateUrl:'templates/rasgoEtiquetas.html'

        }
    }

})(angular);