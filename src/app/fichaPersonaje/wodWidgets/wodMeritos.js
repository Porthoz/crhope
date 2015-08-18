(function (angular){
    'use strict';
    window.console.log('me esta leyedo');

    angular.module('crhope.fichaPersonaje')
        .directive('wodMeritos',wodMeritos);

    function wodMeritos(){

        return {
            restrict:'E',
            scope:{
                meritos:'='
            },
            controller:Controller,
            controllerAs:'vm',
            bindToController:true,
            templateUrl:'app/fichaPersonaje/wodWidgets/wodMeritos.html'
        };

        function Controller(){
            var vm = this;
            vm.addMerito=addMerito;
            vm.subsMerito=subsMerito;

   ////////////////////

            function addMerito (n) {
                if (n === undefined){
                    vm.meritos.push("");
                }else {
                    vm.meritos.splice(n,0,'');
                }
            }

            function subsMerito (n){
                vm.meritos.splice(n,1);
            }
        }
    }

})(window.angular);
