//declaracao do module principal
angular.module('curso_angular',  [
    'ngMessages',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]).config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    var home={
        url: "/home",
        templateUrl: "app/view/home/home.html"
    };

    var menu={
        url: "/menu",
        templateUrl: "app/view/menu/menu.html"
    };

    var cadastroPessoa={
        url: "/pessoa",
        templateUrl: "app/view/pessoa/cadastro-pessoa.html",
        resolve:{
            deps: function($ocLazyLoad){
                return $ocLazyLoad.load("app/view/pessoa/cadastro-pessoa-controller.js");
            }
        }
    };

    var pesquisaPessoa={
        url: "/pessoa",
        templateUrl: "app/view/pessoa/pesquisa-pessoa.html",
        resolve:{
            deps: function($ocLazyLoad){
                return $ocLazyLoad.load("app/view/pessoa/pesquisa-pessoa-controller.js");
            }
        }
    };

    $stateProvider.state('home', home);
    $stateProvider.state('menu', menu);
    $stateProvider.state('cadastroPessoa', cadastroPessoa);
    $stateProvider.state('pesquisaPessoa', pesquisaPessoa);
}