/**
 * Created by porthos on 8/05/15.
 */

(function (angular){

    angular.module('crhope',[
        'crhope.fichaPersonaje',
        'crhope.core'
    ])
        .config(function ($stateProvider,$urlRouterProvider,$locationProvider){
            $stateProvider
                .state('ficha',{
                    url:'crhope/ficha',
                    template:'<ficha-vampiro></ficha-vampiro>'
                });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });


})(window.angular);

