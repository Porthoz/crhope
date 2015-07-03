/**
 * Created by porthos on 22/05/15.
 */
(function (angular) {
    angular.module('crhope')
        .factory('ficha',['$http','$q',ficha]);

    function ficha($http,$q){
        var fichaFactory={};

        //fichaFactory.getFicha = function (){
        //    var defferer = $q.defer();
        //    $http.get('fichas/fichas.json').success(function (data){
        //        //console.log(data);
        //        defferer.resolve(data);
        //        });
        //    return defferer.promise;
        //};

        fichaFactory.getFicha= function(){

            return {
                "generacion":9,
                "modulos":[
                    {
                        "nombre":"Físicos",
                        "rasgo":["Fuerza","Destreza","Resistencia"],
                        "valor":[2,3,4],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Físicos",
                        "rasgo":["Carisma","Manipulación","Apariencia"],
                        "valor":[2,5,0],
                        "maximo":5

                    },
                    {
                        "nombre":"Físicos",
                        "rasgo":["Percepción","Inteligencia","Astucia"],
                        "valor":[3,2,3],
                        "maximo":5
                    }
                ]

            }

        };
        return fichaFactory;
    }
})(window.angular);