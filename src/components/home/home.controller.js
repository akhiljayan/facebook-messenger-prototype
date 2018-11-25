(function () {
    angular.module('app').controller('HomeController', [
        '$state', '$scope','$window',
        function ($state, $scope,$window) {
            var vm = this;
            vm.$onInit = onInit;
    
            function onInit() {
                vm.windowHeight = $window.innerHeight;
            }

            vm.userSelected = function($event){
                vm.userId = $event.userId
            };
        }
    ]);
})();