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
                    url:'/ficha',
                    views:{
                        'ficha':{
                            templateUrl:'app/fichaPersonaje/fichaVampiro/fichaVampiro.html',
                            controller:'fichavampiro as vm'
                        }

                    }
                    //template:'<ficha-vampiro></ficha-vampiro>'
                })
                .state('home',{
                    url:'/',
                    views:{
                        'ficha':{
                            template:'<div><spam class="alert-danger">Aquí va la ficha de PJ</spam></div>'
                        }
                    }
                });

            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //});
        });


})(window.angular);

