/// <reference path="angular.js" />

var myApp = angular.module('DEMO', [])
    .controller('myController', function ($scope) {

    }).directive("welcomeText", function () {
        //var html = "<h1>Welcome to TEDU directive</h1>";
        return {
            templateUrl: "/customdirective.html"
        }
    });
;