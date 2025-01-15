var app = angular.module('CryptoTrader', ['ngRoute']); // Include ngRoute

// Configure routes
app.config(function($routeProvider, $locationProvider) {
   // $locationProvider.html5Mode(true); // Enable HTML5 history mode, this removes #! from URL

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })
        .when('/portfolio', {
            templateUrl: 'app/views/portfolio.html',
            controller: 'portfolioController'
        })
        .otherwise({
            redirectTo: '/' // Redirect to home if an invalid route is entered
        });
});
