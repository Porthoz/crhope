/**
 * Created by porthos on 31/07/15.
 */
(function (angular){
    angular.module('crhope')
        .factory('topos',topos);

    function topos(){
        var marked="marcado";
        var unmarked="desmarcado";
        var toposFactory={};

        toposFactory.generarVector= function (valor) {
            var temp=[];
            for (var i=0; i<10;i++){
                if (valor>i) {temp.push(marked)}
                else{temp.push(unmarked)}
            }

            return temp;
        };
        return toposFactory;
    }

})(window.angular);