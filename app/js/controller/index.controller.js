(function (){
    'use strict';
    angular.module('curso_angular').controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController(){
        var vm = this;
        vm.nome = 'Kumahyra';
        vm.testeFuncao = testeFuncao;

        function testeFuncao(){
           // alert('Olá ' + vm.nome);
        }
    }
})();


