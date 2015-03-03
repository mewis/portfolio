if(typeof angular != 'undefined') {
    angular
        .module('mcPortfolioApp')
        .factory('Content', ['$http',function($http){
            return {
                get: function(){
                    return $http.get('content.json').then(function(responce){
                        return responce.data;
                    });
                }
            };
        }]);
}