var app = angular.module('app', ['ngRoute']);

app.controller('MainCtrl', function ($scope){

})

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/'), {
        template:''
    }
}])