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
                "atributosFisicos":
                {
                    "Nombre":["Fuerza","Destreza","Resistencia"],
                    "Valor":[2,3,4]
                },

                "atributosSociales":
                {
                    "Nombre":["Carisma","Manipulación","Apariencia"],
                    "Valor":[2,2,0]

                },
                "atributosMentales":
                {
                    "Nombre":["Percepción","Inteligencia","Astucia"],
                    "Valor":[3,2,3]
                }
            }
        };
        return fichaFactory;
    }
})(window.angular);