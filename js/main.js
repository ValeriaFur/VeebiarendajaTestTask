var nextpage = angular.module('main',[]);

nextpage.controller('MainCtrl', function($scope,$window) {

    $scope.clicked = function(){

        $window.location.href = "kinnitus.html";
    }

});
