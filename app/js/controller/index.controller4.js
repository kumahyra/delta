(function(){
    'use strict';

    angular.module('curso_angular').controller('IndexController4', IndexController4);

    /* @ngInject */

    function IndexController4(AlertService){
        var vm = this;
        vm.entidade = {};

        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.limpar = limpar;
        vm.testeFuncao = testeFuncao;

        function salvar(){
            AlertService.showSuccess('Registro Salvo com Sucesso');
        }

        function excluir(){
            AlertService.showSuccess('Registro Excluido com Sucesso');
        }

        function limpar(){
            vm.entidade = {};
        }

        function testeFuncao(){
            AlertService.showInfo('Chamou evento');
        }
    }
})();
