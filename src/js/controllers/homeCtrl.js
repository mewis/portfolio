angular.module('mcPortfolioApp').controller('homeCtrl', ['$scope', function($scope){
    $scope.title = 'hey ho lets go!';
    console.log($scope.title);
}])