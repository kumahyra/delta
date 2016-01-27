(function (){
    'use strict';

    angular.module('curso_angular.directive')
        .directive('caCrud', caCrud);

    function caCrud(){
        return{
            link: link,
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/arquitetura/directive/ca-crud/ca-crud.directive.html',
            scope: {
                titulo: '@',
                salvar: '&',
                excluir: '&',
                limpar: '&'
            }
        };

        function link(scope, element, attrs){
            //scope.salvar
        }
    }
})();