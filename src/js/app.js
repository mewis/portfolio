if(typeof angular != 'undefined') {
    var app = angular.module('mcPortfolioApp', [
        'ui.router'
    ])

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'templates/home.html',
                controller : 'homeCtrl'
            })
    }])
}