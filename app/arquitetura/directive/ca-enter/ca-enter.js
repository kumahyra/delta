(function (){
    'use strict';

    /* @ngInject */
    angular.module('curso_angular.directive')
        .directive('caEnter', caEnter);

    function caEnter(KeyCode){
        return{
            link: link,
            restrict: 'A'

        };

        function link(scope, element, attrs){
            element.bind('keydown',onKeydown);

            function onKeydown(event){

                var code = event.keyCode;
                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.caEnter);
                }
            }
        }
    }
})();