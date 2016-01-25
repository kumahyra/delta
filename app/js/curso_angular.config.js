//declaracao do module principal

(function(){
    angular.module('curso_angular')
        .config(config);

    /* @ngInject */

    function config($stateProvider, $urlRouterProvider){
        //$urlRouterProvider.otherwise('/home'); //se não existir a pagina requisitada volta para home

        var home={
            url: '/home',
            templateUrl: 'app/view/home/home.html'
        };

        var menu={
            url: '/menu',
            templateUrl: 'app/view/menu/menu.html'
        };

        var cadastroPessoa={
            url: '/pessoa/:id',
            templateUrl: 'app/view/pessoa/cadastro-pessoa.html',
            resolve:{
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/view/pessoa/cadastro-pessoa.controller.js');
                }
            }
        };

        var pesquisaPessoa={
            url: '/pessoa',
            templateUrl: 'app/view/pessoa/pesquisa-pessoa.html',
            resolve:{
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/view/pessoa/pesquisa-pessoa.controller.js');
                }
            }
        };

        $stateProvider.state('home', home);
        $stateProvider.state('menu', menu);
        $stateProvider.state('cadastroPessoa', cadastroPessoa);
        $stateProvider.state('pesquisaPessoa', pesquisaPessoa);
    }
})();
