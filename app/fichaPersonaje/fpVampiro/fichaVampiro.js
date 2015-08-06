/**
 * Created by porthos on 30/07/15.
 */
(function (angular){
    angular.module('crhope')
        .directive('fichaVampiro',fichaVampiro);

    function fichaVampiro(){

        return{
            restricted:'E',
            scope:{
                ficha:'='
            },
            controller:Controller,
            templateUrl:'fichaVampiro.html'

        };

        function Controller($scope){

        }
    }


})(window.angular);