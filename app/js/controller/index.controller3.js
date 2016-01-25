(function(){
    'use strict';

    angular.module('curso_angular').controller('IndexController3', IndexController3);

    /* @ngInject */

    function IndexController3($timeout, AlertService, $filter, $rootScope, $state){
        var vm = this;
        vm.listaDePessoas = [];
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.onClickEditar = onClickEditar;
        vm.getRowStyle = getRowStyle;
        vm.excluirItem = excluirItem;
        vm.dispararEvento = dispararEvento;

        iniciar();

        function iniciar(){
            vm.gridOptions = {
                data: 'listaDePessoas',
                columnDefs:[
                    {field: 'nome', displayName: 'Nome', width: 300},
                    {field: 'sobrenome', displayName: 'Sobrenome'},
                    {field: 'email', displayName: 'e-mail'},
                    {field: 'nascimento', displayName: 'Data Nascimento', width: 150,
                        cellTemplate: 'app/template/cell-template.html'},
                    {field: 'Editar', displayName: '', width: 60,
                        cellTemplate: 'app/template/cell-template-editar.html'}

                ],
                rowTemplate: 'app/template/row-template.html'
            };
        }

        function salvar(){
            //$scope.myClass = 'azul';
            setarTouchedNosInputs();
            if(vm.frmPessoa.$invalid){
                AlertService.showError('Verique os Campos antes de Salvar');
                return;
            }

            var data = vm.entidade.nascimento;
            vm.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

            vm.listaDePessoas.push(vm.entidade);
            AlertService.showSuccess('Registro Salvo com Sucesso!');
            limpar();
        }

        function limpar(){
            //$scope.myClass = 'vermelho';
            vm.entidade = {};
            $timeout(function(){
                setarUnTouchedNosInputs();
            },50);

        }

        function setarTouchedNosInputs(){
            //angular.forEach(objetoOuArray, function(propriedadeOuItemDoArrya, nomeDaPropriedade){...});

            angular.forEach(vm.frmPessoa.$error, function(error){
                angular.forEach(error, function(field){
                    field.$setTouched();
                });
            });
        }

        function setarUnTouchedNosInputs(){
            angular.forEach(vm.frmPessoa.$error, function(error){
                angular.forEach(error, function(field){
                    field.$setUntouched();
                });
            });
        }

        function onClickEditar(linhaSelecionada){
            vm.entidade = linhaSelecionada;
        }

        function getRowStyle(linhaSelecionada){
            var style = {};
            style.backgroundColor = linhaSelecionada.corLinha;
            style.color = linhaSelecionada.corLinhaTexto;
            return style;
        }

        function excluirItem(){
            vm.listaDePessoas.splice(vm.entidade);
        }

        function dispararEvento(){
            $rootScope.$broadcast('testeBroadcastEvente', {nome: 'Kumahyra'});
            $state.go('homedddd');
        }

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateNotFound', stateNotFound);

        function stateChangeStart(event, toState, toParams, fromState, fromParams){
            if(toState.name === 'cadastroPessoa'){
                AlertService.showError('Você não tem Permissão de Acessar esta Tela');
                event.preventDefault();
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams){
            AlertService.showSuccess('Carregou o estado: ' + toState.name + ' com Sucesso.');
        }

        function stateNotFound(event, unfoundState, fromState, fromParams){
            AlertService.showError('Essa página não existe');
            $state.go('home');
        }

    }

})();
