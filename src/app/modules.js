(function (Modules, undefined){

    /**
     * @ngdoc object
     * @id APP
     * @name APP
     * @description
     * 
     * This module initializes  the APP Angular module
     */
    Modules.APP = angular.module("app", ['ui.router', 'ngMessages', 'ngStorage']);

}(APP.Modules = APP.Modules || {}));
