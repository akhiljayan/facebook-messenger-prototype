(function () {
    angular.module('app').controller('ChatBoxController', [
        '$state', '$scope', '$window', 'operations', '$timeout',
        function ($state, $scope, $window, operations, $timeout) {
            var vm = this;
            vm.$onInit = onInit;

            vm.$onChanges = function (changes) {
                if (changes.selectedUserId && changes.selectedUserId.currentValue) {
                    vm.userDetails = operations.getUserById(vm.selectedUserId);
                    vm.chatHistory = operations.getConversations(vm.selectedUserId);
                    vm.currentUser = operations.getCurrentUser();
                    $timeout(function () {
                        var scroller = document.getElementById("chat-box");
                        scroller.scrollTop = scroller.scrollHeight;
                    }, 0, false);
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
                $timeout(function () {
                    var scroller = document.getElementById("chat-box");
                    scroller.scrollTop = scroller.scrollHeight;
                }, 0, false);
            }

            $scope.orderByDate = function (item) {
                var date = new Date(item.timeStamp);
                return date;
            };

            function makeid() {
                var text = "";
                var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 25; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            }

        }
    ]);
})();