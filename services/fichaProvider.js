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

        fichaFactory.fichaVacia = function(){

            return {
                "nombre":"",
                "jugador":"",
                "cronica":"",
                "naturaleza":"",
                "conducta":"",
                "concepto":"",
                "generacion":13,
                "clan":"",
                "refugio":"",
                "modulos":[
                    {
                        "rasgo":["Nombre","Jugador","Crónica"],
                        "valor":["","",""],
                        "maximo":5,
                        "tipo":"texto-editable"
                    },
                    {
                        "rasgo":["Naturaleza","Conducta","Concepto"],
                        "valor":["","",""],
                        "maximo":5,
                        "tipo":"texto-editable"
                    },
                    {
                        "rasgo":["Clan","Refugio"],
                        "valor":["","",""],
                        "maximo":5,
                        "tipo":"texto-editable"
                    },

                    {
                        "nombre":"Físicos",
                        "rasgo":["Fuerza","Destreza","Resistencia"],
                        "valor":[1,1,1],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Sociales",
                        "rasgo":["Carisma","Manipulación","Apariencia"],
                        "valor":[1,1,0],
                        "maximo":5,
                        "tipo":"topos"

                    },
                    {
                        "nombre":"Mentales",
                        "rasgo":["Percepción","Inteligencia","Astucia"],
                        "valor":[1,1,1],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Talentos",
                        "rasgo":["Actuar","Alerta","Atletismo","Callejeo","Esquivar","Empatía","Intimidación","Liderazgo","Pelea","Subtergio"],
                        "valor":[0,0,0,0,0,0,0,0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Técnicas",
                        "rasgo":["Armas C. C.","Armas de Fuego","Conducir","Etiqueta","Música","Reparaciones","Serguridad","Sigilo","Supervivencia","Trato con animales"],
                        "valor":[0,0,0,0,0,0,0,0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Conocimientos",
                        "rasgo":["Burocracioa","Ciencias","Finazas","Informática","Investigación","Leyes","Linguística","Medicina","Ocultismo","Política"],
                        "valor":[0,0,0,0,0,0,0,0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Disciplinas",
                        "rasgo":["","",""],
                        "valor":[0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Trasfondos",
                        "rasgo":["","",""],
                        "valor":[0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Virtudes",
                        "rasgo":["Conciencia","Autocontrol","Coraje"],
                        "valor":[1,1,1],
                        "maximo":5,
                        "tipo":"topos-fijo"
                    },
                    {
                        "nombre":"Otros Rasgos",
                        "rasgo":["","",""],
                        "valor":[0,0,0],
                        "maximo":5,
                        "tipo":"topos"
                    },
                    {
                        "nombre":"Fuerza de voluntad",
                        "rasgo":["texto","circulo","cuadrado"],
                        "valor":['Senda__________',6,7],
                        "maximo":10,
                        "tipo":"fuerza-voluntad"
                    }


                ]

            }

        };
        return fichaFactory;
    }
})(window.angular);