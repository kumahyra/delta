//declaracao do module principal
(function (){
    'use strict';

    angular.module('curso_angular.controller', []);
    angular.module('curso_angular.service', []);
    angular.module('curso_angular.factory', []);
    angular.module('curso_angular.directive', []);
    angular.module('curso_angular.filter', []);

    angular.module('curso_angular',  [
        'ngMessages',
        'toastr',
        'ui.grid',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'curso_angular.controller',
        'curso_angular.service',
        'curso_angular.factory',
        'curso_angular.directive',
        'curso_angular.filter',
        'angular-keycode'
    ]);
})();

