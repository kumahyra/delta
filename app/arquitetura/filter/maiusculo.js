/**
 * Created by Kumahyra on 14/01/2016.
 */
(function(){
    'use strict';

    angular.module('curso_angular').filter('maiusculo', maiusculo);

    function maiusculo() {
        return function(input){
            if(input && (typeof input === 'string')){
                return input.toUpperCase();
            }
            return input;
        };
    }
})();
