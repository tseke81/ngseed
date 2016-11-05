(function (Run, undefined){

    /**
     * @ngdoc object
     * @id APP
     * @name APP
     * @description
     * 
     * This module initializes  the APP Angular module
     */
    APP.Modules.APP.run(['$state', function($state){
        $state.transitionTo('home');
    }]);

}(APP.Run = APP.Run || {}));
