angular.module('curso_angular').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController3($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    $scope.excluirItem = excluirItem;

    iniciar();

    function iniciar(){
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs:[
                {field: 'nome', displayName: 'Nome', width: 300},
                {field: 'sobrenome', displayName: 'Sobrenome'},
                {field: 'email', displayName: 'e-mail'},
                {field: 'nascimento', displayName: 'Data Nascimento', width: 150, cellTemplate: 'app/template/cell-template.html'},
                {field: 'Editar', displayName: '', width: 60, cellTemplate: 'app/template/cell-template-editar.html'}

            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

    function salvar(){
        //$scope.myClass = 'azul';
        setarTouchedNosInputs();
        if($scope.frmPessoa.$invalid){
            AlertService.showError('Verique os Campos antes de Salvar');
            return;
        }

        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Registro Salvo com Sucesso!');
        limpar();
    }

    function limpar(){
        //$scope.myClass = 'vermelho';
        $scope.entidade = {};
        $timeout(function(){
            setarUnTouchedNosInputs();
        },50);

    }

    function setarTouchedNosInputs(){
        //angular.forEach(objetoOuArray, function(propriedadeOuItemDoArrya, nomeDaPropriedade){...});

        angular.forEach($scope.frmPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUnTouchedNosInputs(){
        angular.forEach($scope.frmPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(linhaSelecionada){
        $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.corLinha;
        style.color = linhaSelecionada.corLinhaTexto;
        return style;
    }

    function excluirItem(){
        $scope.listaDePessoas.splice($scope.entidade);
    }
}
