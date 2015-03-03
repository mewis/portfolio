if(typeof angular != 'undefined') {
    angular.module('mcPortfolioApp', [
        'ui.router'
    ])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'templates/home.html',
                controller : 'homeCtrl'
            });
    }])

    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
}