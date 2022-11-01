//Create angular App
var validationApp = angular.module('validationApp',[]);

//Create angular controller 
validationApp.controller('mainController', function ($scope){
    $scope.submitForm = function (isValid) {
        if(isValid) {
            alert('form is Valid');
        }
    };

});