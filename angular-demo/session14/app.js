var app = angular.module('app', []);

app.controller('consumWsCtrl', consumWsCtrl);

consumWsCtrl.$inject = ['$scope', '$http'];

function consumWsCtrl($scope, $http) {

    $http.get('/session14/Employees.asmx/GetEmployees').then(function (response) {
        $scope.employees = response.data;
    });
}