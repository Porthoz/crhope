/**
 * Created by porthos on 22/05/15.
 */
(function (angular) {
    'use strict';
    angular.module('crhope.core')
        .factory('dataservice',['$http','$q',dataservice]);

    function dataservice($http,$q){
        var vampiro={};

        var fichaFactory = {
            getFicha:getFicha,
            getVampiro:getVampiro
        };

        return fichaFactory;

       function getFicha(){
            var defferer = $q.defer();
            $http.get('data/data.json').success(function (data){
                  defferer.resolve(data);
                });
            return defferer.promise;
        }

        function getVampiro () {
            window.console.log('cargando plantilla...');

            return {
                "nombre":"Nemesio",
                "jugador":"Alguien",
                "cronica":"Pepiño",
                "naturaleza":"Flores",
                "conducta":"Borde",
                "concepto":"Abstracto",
                "clan":"Nosferrata",
                "generacion":12,
                "refugio":"El monte",
                "fisicos":{
                    "nombre":"Físicos",
                    "rasgo":["Fuerza","Destreza","Resistencia"],
                    "valor":[1,1,1]
                },
                "sociales":{
                    "nombre":"Sociales",
                    "rasgo":["Carisma","Manipulación","Apariencia"],
                    "valor":[1,1,0]
                },
                "mentales":{
                    "nombre":"Mentales",
                    "rasgo":["Percepción","Inteligencia","Astucia"],
                    "valor":[1,1,1]
                },
                "talentos":{
                    "nombre":"Talentos",
                    "rasgo":["Actuar","Alerta","Atletismo","Callejeo","Esquivar","Empatía","Intimidación","Liderazgo","Pelea","Subtergio"],
                    "valor":[0,0,0,0,0,0,0,0,0,0],
                },
                "tecnicas":{
                    "nombre":"Técnicas",
                    "rasgo":["Armas C. C.","Armas de Fuego","Conducir","Etiqueta","Música","Reparaciones","Serguridad","Sigilo","Supervivencia","Trato con animales"],
                    "valor":[0,0,0,0,0,0,0,0,0,0]
                },
                "conocimientos":{
                    "nombre":"Conocimientos",
                    "rasgo":["Burocracioa","Ciencias","Finazas","Informática","Investigación","Leyes","Linguística","Medicina","Ocultismo","Política"],
                    "valor":[0,0,0,0,0,0,0,0,0,0],
                },
                "disciplinas":{
                    "nombre":"Disciplinas",
                    "rasgo":["","",""],
                    "valor":[0,0,0]
                },
                "trasfondos":{
                    "nombre":"Trasfondos",
                    "rasgo":["","",""],
                    "valor":[0,0,0]
                },
                "virtudes":{
                    "nombre":"Virtudes",
                    "rasgo":["Conciencia","Autocontrol","Coraje"],
                    "valor":[1,1,1]
                },
                "senda":{
                    "nombre":"Humanidad",
                    "valor":7
                },
                "voluntad":{
                    "temporal":7,
                    "permanente":7
                },
                "reserva":{
                    "maximo":21,
                    "valor":11
                },
                "meritos":["Feo (7pts)","Alegre (2pts)",""]

            };



        }
    }
})(window.angular);