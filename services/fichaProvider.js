/**
 * Created by porthos on 22/05/15.
 */
(function (angular) {
    angular.module('crhope')
        .factory('ficha',['$http','$q',ficha]);

    function ficha($http,$q){
        var fichaFactory={};

        fichaFactory.getFicha = function (){
            var defferer = $q.defer();
            $http.get('fichas/fichas.json').success(function (data){
                  defferer.resolve(data);
                });
            return defferer.promise;
        };

        fichaFactory.getUser = function (){
            var defferer = $q.defer();
            $http.get('http://localhost:1337/user').success(function (data){
                defferer.resolve(data);
            });
            return defferer.promise;
        };

        fichaFactory.getPlantilla= function () {
          var def =$q.defer();
            $http.get('fichas/plantillaVampiro.json').success(function (data){
                    def.resolve(data);
                });

            return def.promise;
        };


        return fichaFactory;
    }
})(window.angular);