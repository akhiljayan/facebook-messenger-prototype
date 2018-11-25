(function () {
    angular.module('app').component('conversationBlock', {
        bindings: {
            model: '<',
            userClick: '&',
        },
        controller: 'ConversationBlock',
        controllerAs: 'vm',
        templateUrl: 'components/conversationBlock/conversationBlock.html'
    });
})();