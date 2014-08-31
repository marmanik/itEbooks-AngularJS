(function () {

    var BookDetailsController = function ($scope, $routeParams, $log, searchBookFactory, appSettings, $location) {

        var bookId = $routeParams.bookId;
        $scope.book = null;
        $scope.appSettings = appSettings;

        // Get data for a specific book and the bookId is url-parameter
        function init() {
            searchBookFactory.getBookById(bookId)
                .success(function (book) {
                    $scope.book = book;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        init();
    }
    BookDetailsController.$inject = ['$scope', '$routeParams', '$log', 'searchBookFactory',
                                   'appSettings', '$location'];

    angular.module('itBooksApp')
        .controller('BookDetailsController', BookDetailsController);

}());
