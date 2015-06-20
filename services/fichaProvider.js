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
                console.log(data);
                defferer.resolve(data);
                });
            return defferer.promise;
        };
        return fichaFactory;
    }
})(window.angular);