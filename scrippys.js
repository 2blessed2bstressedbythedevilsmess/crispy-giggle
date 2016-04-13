
var app=  angular.module('myApp', []);

app.controller('names1Ctrl', function($scope) {
    $scope.names = [
        {name:'Jaime',state:'California'},
        {name:'Andrew',state:'Oregon'},
        {name:'Erinn',state:'Texas'},
        {name:'Martin',state:'California'},
        {name:'Jose',state:'Oregon'},
        {name:'Gustav',state:'Texas'},
        {name:'Amanda',state:'California'},
        {name:'Andrea',state:'Oregon'},
        {name:'Angel',state:'Texas'}
        ];
});


app.controller('namesCtrl', function($scope) {
    $scope.names = [
        'Jaime',
        'Andrew',
        'Erinn',
        'Martin',
        'Jose',
        'Gustav',
        'Amanda',
        'Andrea',
        'Angel'
    ];
});