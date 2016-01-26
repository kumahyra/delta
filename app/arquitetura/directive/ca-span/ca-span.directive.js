(function (){
    'use strict';

    angular.module('curso_angular.directive')
        .directive('caSpan', caSpan);

    function caSpan(){
        return{
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-span/ca-span.directve.html',
            scope: {
                texto: '@'
            },
            link: function($scope, element, attrs){

            }
        };
    }
})();