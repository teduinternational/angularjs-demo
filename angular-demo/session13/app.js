(function () {
    var app = angular.module('app', []);

    app.controller('ngIncludeDemoCtrl', ngIncludeDemoCtrl);

    ngIncludeDemoCtrl.$inject = ['$scope'];

    function ngIncludeDemoCtrl($scope) {
        var employees = [
            { name: 'Hải', birthDate: new Date('12/3/1989'), salary: 15000000, gender: 'Male', status:true},
            { name: 'Hoàng', birthDate: new Date('6/15/1990'), salary: 12000000, gender: 'Male', status: true },
            { name: 'Long', birthDate: new Date('1/14/1992'), salary: 17000000, gender: 'Male', status: false },
            { name: 'Trung', birthDate: new Date('12/3/1993'), salary: 12000000, gender: 'Male', status: true },
            { name: 'Hương', birthDate: new Date('12/3/1995'), salary: 11000000, gender: 'Female', status: false },
            { name: 'Thủy', birthDate: new Date('12/3/1988'), salary: 10000000, gender: 'Female', status: true }
        ];
        $scope.employees = employees;
        $scope.employeeView = 'tableEmployeeView.html';
    }

    app.filter('status', function () {
        return function (input) {
            if (input == true)
                return 'Kích hoạt';
            else
                return 'Khóa';
        }
    });
})()