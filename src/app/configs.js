(function (Configs, undefined){

    /**
     * @ngdoc object
     * @id APP
     * @name APP
     * @description
     * 
     * This module initializes  the APP Angular module
     */
    APP.Modules.APP.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: APP.ViewsPath + '/home.view.html',
                controller: 'HomePageCtrl',
                controllerAs: 'vm'
            });
            
   
    }]);

}(APP.Configs = APP.Configs || {}));
