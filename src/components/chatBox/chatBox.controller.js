(function () {
    angular.module('app').controller('ChatBoxController', [
        '$state', '$scope', '$window', 'operations',
        function ($state, $scope, $window, operations) {
            var vm = this;
            vm.$onInit = onInit;

            vm.$onChanges = function (changes) {
                if (changes.selectedUserId && changes.selectedUserId.currentValue) {
                    vm.userDetails = operations.getUserById(vm.selectedUserId);
                    vm.chatHistory = operations.getConversations(vm.selectedUserId);
                    vm.currentUser = operations.getCurrentUser();
                }
            };

            function onInit() {
                vm.userDetails = operations.getUserById(vm.selectedUserId);
                vm.chatHistory = operations.getConversations(vm.selectedUserId);
                vm.currentUser = operations.getCurrentUser();
            }

            vm.sentMessage = function () {
                vm.model = {
                    "messageId": makeid(),
                    "formUser": vm.currentUser.userName,
                    "formUserId": vm.currentUser.id,
                    "timeStamp": new Date(),
                    "message": vm.message
                };
                //operations.addMessageToChat(vm.chatHistory.id, vm.model);
                vm.chatHistory.conversation.push(vm.model);
                vm.message = "";
            }

            $scope.orderByDate = function (item) {
                var date = new Date(item.timeStamp);
                return date;
            };

            function makeid() {
                var text = "";
                var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 25; i++){
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
              }

        }
    ]);
})();