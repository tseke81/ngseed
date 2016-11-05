(function (Controllers, undefined){
    APP.Modules.APP.controller("HomePageCtrl", ['$scope', function ($scope){
      var vm = this;
      

        initController();

        function initController() {
	console.log('home page controller works!!')
        }

    }]);
}(APP.Controllers = APP.Controllers || {}));
