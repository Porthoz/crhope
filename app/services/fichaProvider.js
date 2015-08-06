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
            console.log('cargando plantilla...');
          return {
              "generacion":13,
              "sangre":10,
              "voluntad":{"temporal":0,"permanente":0},
              "senda":{"nombre":"","valor":0},
              "modulos":[
                  {
                      "rasgo":["Nombre","Jugador","Crónica"],
                      "valor":["","",""],
                      "maximo":{"valor":0,"editable":false},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"texto-editable"
                  },
                  {
                      "rasgo":["Naturaleza","Conducta","Concepto"],
                      "valor":["","",""],
                      "maximo":{"valor":0,"editable":false},
                      "tipo":"texto-editable"
                  },
                  {
                      "rasgo":["Clan","Refugio"],
                      "valor":["",""],
                      "maximo":{"valor":0,"editable":false},
                      "tipo":"texto-editable"
                  },
                  {
                      "nombre":"Físicos",
                      "rasgo":["Fuerza","Destreza","Resistencia"],
                      "valor":[1,1,1],
                      "maximo":{"valor":5,"editable":true},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"topos"
                  },
                  {
                      "nombre":"Sociales",
                      "rasgo":["Carisma","Manipulación","Apariencia"],
                      "valor":[1,1,0],
                      "maximo":{"valor":5,"editable":true},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"topos"
                  },
                  {
                      "nombre":"Mentales",
                      "rasgo":["Percepción","Inteligencia","Astucia"],
                      "valor":[1,1,1],
                      "maximo":{"valor":5,"editable":true},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"topos"
                  },
                  {
                      "nombre":"Fuerza de voluntad",
                      "temporal":7,
                      "permanente":9,
                      "maximo":{"valor":10,"editable":false},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"fuerza-voluntad"
                  },

                  {
                      "nombre":"Senda",
                      "senda":"Humanidad",
                      "valor":7,
                      "maximo":{"valor":10,"editable":false},
                      "bloqueado":{"valor":false,"editable":true},
                      "tipo":"Senda"
                  }
              ]
          }
        };


        return fichaFactory;
    }
})(window.angular);