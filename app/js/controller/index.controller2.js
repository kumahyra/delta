(function(){
    'use strict';

    angular.module('curso_angular').controller('IndexController2', IndexController2);

    /* @ngInject */

    function IndexController2($scope){
        var vm = this;

        vm.nome = 'Kumahyra';
        vm.myStyle = {};

        $scope.$watch('vm.nome', onChangeNome);

        function onChangeNome(novoValor, valorAntingo){
            if(novoValor === valorAntingo ){
                return;
            }
            if(novoValor === 'delta'){
                vm.myStyle.backgroundColor = 'red';
            }
            else{
                vm.myStyle.backgroundColor = 'blue';
            }
        }
    }
})();

