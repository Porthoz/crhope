/**
 * Created by porthos on 6/08/15.
 */

(function (angular) {
    'use strict';

    angular.module('crhope.core',[
        //otros
        'xeditable',
        'ui.router',
        'ui.bootstrap'
    ])
        .run (function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3. También puede ser 'bs2', 'default'
    });

})(window.angular);
