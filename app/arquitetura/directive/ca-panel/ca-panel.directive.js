(function (){
    'use strict';

    angular.module('curso_angular.directive')
        .directive('caPanel', caPanel);

    function caPanel(){
        return{
            link: link,
            restrict: 'E',
            transclude: {
                'body': 'panelBody',
                'footer': 'panelFooter'
            },
            templateUrl: 'app/arquitetura/directive/ca-panel/ca-panel.directive.html',
            scope: {
                titulo: '@',
                tipo: '@'
            }
        };

        function link(scope, element, attrs){
            if(!attrs.tipo){
                attrs.tipo = 'default';
            }
            scope.myTipo = 'panel panel-' + attrs.tipo;
        }
    }
})();