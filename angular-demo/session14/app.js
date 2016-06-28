var app = angular.module('app', []);

app.controller('consumWsCtrl', consumWsCtrl);

consumWsCtrl.$inject = ['$scope', '$http', '$log'];

function consumWsCtrl($scope, $http, $log) {

    $http.get('/session14/Employees.asmx/GetEmployees')
        .then(
        function (response) {
            $scope.employees = response.data;
        },
        function (response) {
            $log.error(response.data);
        });
}