(function() {
    
    var app = angular.module('itBooksApp',['ngRoute','ui.bootstrap','ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ItBooksController',
                templateUrl: 'app/views/itBooks.html'
            })
            .when('/search/:query', {
                controller: 'ItBooksController',
                templateUrl: 'app/views/itBooks.html'
            })
            .when('/books/:bookId', {
                controller: 'BookDetailsController',
                templateUrl: 'app/views/bookDetails.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
   
    
}());