angular.module('curso_angular').controller('cadastroPessoaController', cadastroPessoaController);

cadastroPessoaController.$inject = ['$scope'];

function cadastroPessoaController($scope){
    $scope.nome = 'Cadastro de Pessoa';
}