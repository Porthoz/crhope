/**
 * Created by porthos on 20/07/15.
 */
(function (angular){
    'use strict';
    angular.module('crhope')
        .directive('textoVariable',textoVariable);

    function textoVariable(){

        return {
            restrict:'E',
            scope:{
                modulo:'='
            },
            transclude:true,
            controller: function($scope){},
            templateUrl:'templates/textoEditable.html'
            //template:'<div>esto es una kk</div>'
        }
    }

})(angular);