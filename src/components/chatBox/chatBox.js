(function () {
    angular.module('app').component('chatBox', {
        bindings: {
            selectedUserId: '<',
        },
        controller: 'ChatBoxController',
        controllerAs: 'vm',
        templateUrl: 'components/chatBox/chatBox.html'
    });
})();