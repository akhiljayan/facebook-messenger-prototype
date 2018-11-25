(function () {
    angular.module('app').controller('FriendsListController', [
        '$state', '$scope','operations',
        function ($state, $scope,operations) {
            var vm = this;
            vm.$onInit = onInit;
    
            function onInit() {
                var currentUSerId = "66";
                vm.latestConversations = operations.getRecentConversations(currentUSerId);
            }

            vm.userClicked = function(event){
                vm.userSelected({
                    $event: {
                        userId: event.userId
                    }
                });
            };  

            $scope.orderByDate = function(item) {
                var date = new Date(item.lastMessageTimestamp);
                return -date;
            };

        }
    ]);
})();