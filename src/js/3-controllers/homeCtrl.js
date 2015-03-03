if(typeof angular != 'undefined') {
    angular
        .module('mcPortfolioApp')
        .controller('homeCtrl',["$scope", 'Content', function ($scope, Content) {
            Content.get().then(function(data) {
                $scope.content = data;
            });
        }]);
}