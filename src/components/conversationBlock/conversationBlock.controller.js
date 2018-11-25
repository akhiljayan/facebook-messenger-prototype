(function () {
    angular.module('app').controller('ConversationBlock', [
        '$state', '$scope', 'operations',
        function ($state, $scope, operations) {
            var vm = this;
            vm.$onInit = onInit;

            function onInit() {
                vm.conversation = vm.model;
            }

            vm.getDate = function (dateStr) {
                var date = new Date(dateStr);
                var today = new Date();
                var isToday = vm.isSameDateAs(date, today);
                if (isToday) {
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var ampm = hours >= 12 ? 'pm' : 'am';
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    return hours + ':' + minutes + ' ' + ampm;
                } else {
                    return date.getDay()+1+"-"+date.getMonth()+"-"+date.getFullYear();
                }
            };

            vm.isSameDateAs = function (d1, d2) {
                return (
                    d1.getFullYear() === d2.getFullYear() &&
                    d1.getMonth() === d2.getMonth() &&
                    d1.getDate() === d2.getDate()
                );
            };

            vm.userSelected = function(id){
                vm.userClick({
                    $event: {
                        userId: id
                    }
                });
            };
        }
    ]);
})();