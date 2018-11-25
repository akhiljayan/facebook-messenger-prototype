(function () {
    angular.module('app').component('friendsList', {
        bindings: {
            userSelected: '&',
        },
        controller: 'FriendsListController',
        controllerAs: 'vm',
        templateUrl: 'components/friendsList/friendsList.html'
    });
})();