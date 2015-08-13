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
                    views:{
                        'ficha':{
                            template:'<ficha-vampiro></ficha-vampiro>'
                        },
                        resolve:
                        {
                        init:function(Vampiro){
                            Vampiro.init()
                        }
                        }

                    }
                    //template:'<ficha-vampiro></ficha-vampiro>'
                })
                .state('home',{
                    url:'crhope/',
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

