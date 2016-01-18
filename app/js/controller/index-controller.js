angular.module('curso_angular').controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];
function IndexController($scope){
    $scope.nome = 'Kumahyra';
    $scope.testeFuncao = testeFuncao;

    function testeFuncao(){
        alert('Olá ' + $scope.nome);


    }
}
