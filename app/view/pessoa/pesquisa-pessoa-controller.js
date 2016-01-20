angular.module('curso_angular').controller('pesquisaPessoaController', pesquisaPessoaController);

pesquisaPessoaController.$inject = ['$scope'];

function pesquisaPessoaController($scope){
    $scope.nome = 'Pesquisa de Pessoa';
}