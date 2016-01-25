angular.module('curso_angular').controller('pesquisaPessoaController', pesquisaPessoaController);

/* @ngInject */

function pesquisaPessoaController($scope, $state){
    $scope.nome = 'Pesquisa de Pessoa';
    $scope.redirecionaParaCadastro = redirecionaParaCadastro;

    function redirecionaParaCadastro(){
        $state.go('cadastroPessoa', {id:15});
    }
}