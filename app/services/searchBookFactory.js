(function () {
    var searchBookFactory = function ($http) {

        var factory = {};

        // Web service calls
        factory.getBooksByQuery = function (query) {
            return $http.get('http://it-ebooks-api.info/v1/search/' + query);
        };
        factory.getBooksByQueryPage = function (query, page) {
            return $http.get('http://it-ebooks-api.info/v1/search/' + query + '/page/' + page);
        };
        factory.getBookById = function (bookId) {
            return $http.get('http://it-ebooks-api.info/v1/book/' + bookId);
            
        };

        return factory;
    };

    searchBookFactory.$inject = ['$http'];

    angular.module('itBooksApp').factory('searchBookFactory',
        searchBookFactory);

}());