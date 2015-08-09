/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',[
        'crhope.fichaPersonaje',
        'crhope.core'
    ])
        .config(function ($stateProvider,$urlRouterProvider){
            $stateProvider
                .state('ficha',{
                    url:'/ficha',
                    template:'<ficha-vampiro></ficha-vampiro>'
                })
        });


})(window.angular);

