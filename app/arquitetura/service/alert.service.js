/**
 * Created by Kumahyra on 14/01/2016.
 */

(function(){
    /**
     * Service utiliza o this
     */
    'use strict';

    angular.module('curso_angular').service('AlertService', AlertService);

    AlertService.$inject = ['toastr'];

    function AlertService(toastr){

        this.showSuccess = showSuccess;
        this.showError = showError;
        this.showWarning = showWarning;
        this.showInfo = showInfo;

        function showSuccess(mensagem, titulo){
            if(!titulo){
                titulo = 'OK';
            }
            toastr.success(mensagem, titulo, {progressBar: true});
        }

        function showError(mensagem, titulo){
            if(!titulo){
                titulo = 'Error';
            }
            toastr.error(mensagem, titulo, {progressBar: true});
        }

        function showWarning(mensagem, titulo){
            if(!titulo){
                titulo = 'Alerta';
            }
            toastr.warning(mensagem, titulo, {progressBar: true});
        }

        function showInfo(mensagem, titulo){
            if(!titulo){
                titulo = 'Info';
            }
            toastr.info(mensagem, titulo, {progressBar: true});
        }

    }
})();


