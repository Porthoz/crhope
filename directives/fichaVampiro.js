/**
 * Created by porthos on 30/07/15.
 */
(function (angular){
    angular.module('crhope')
        .directive('fichaVampiro',fichaVampiro);

    function fichaVampiro(){

        function Controller($scope){

        }
        return{
            restricted:'E',
            scope:{
                ficha:'='
            },
            controller:Controller,
            templateUrl:'templates/fichaVampiro.html'

        }
    }


})(window.angular);