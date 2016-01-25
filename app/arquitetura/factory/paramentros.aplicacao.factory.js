/**
 * Created by Kumahyra on 14/01/2016.
 */
(function(){
    'use strict';

    angular.module('curso_angular').factory('ParamentrosAplicacao', ParamentrosAplicacao);

    /**
     * Factory retorna um objeto
     */
    function ParamentrosAplicacao(){
        return{
            nomeDoUsuario: '',
            email: '',
            logado: false
        };
    }
})();
