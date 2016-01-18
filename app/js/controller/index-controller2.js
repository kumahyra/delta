angular.module('curso_angular').controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope'];

function IndexController2($scope){
    $scope.nome = 'Kumahyra';
    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntingo){
        if(novoValor === valorAntingo ){
            return;
        }
        if(novoValor === 'delta'){
            $scope.myStyle.backgroundColor = 'red';
        }
        else{
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
}
