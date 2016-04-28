/// <reference path="../angular.js" />

var myApp = angular.module('scopeDemo', []);

myApp.controller('classController', classController);
myApp.controller('schoolController', schoolController);
myApp.controller('topController', topController);

function classController($scope) {
    $scope.name = "Child 1 Controller";
};

function schoolController($scope, $rootScope) {
    $scope.name = "Child 2 Controller";

};
function topController($scope, $rootScope) {
     $scope.name = "This is nested scope AngularJS";

};