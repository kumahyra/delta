angular.module('curso_angular').controller('cadastroPessoaController', cadastroPessoaController);

/* @ngInject */

function cadastroPessoaController($scope, $stateParams){
    $scope.nome = 'Cadastro de Pessoa';
    var meuId = $stateParams.id;
   // if(meuId){

    //}

    $scope.$on('testeBroadcastEvente',testeBroadcastEvente);

    function testeBroadcastEvente(event, data){

    }
}