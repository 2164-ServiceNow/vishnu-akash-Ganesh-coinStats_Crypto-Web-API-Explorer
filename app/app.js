var app = angular.module('CryptoTrader', ['ngRoute']); // Include ngRoute

app.config(function ($routeProvider, $locationProvider) {
    // Configure routes
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })
        .when('/coins', {
            templateUrl: 'app/views/displayAllCoins.html',
            controller: 'displayAllCoins'
        })
        .when('/news', {
            templateUrl: 'app/views/news.html',
            controller: 'newsController'
        })
        .when('/nft', {
            templateUrl: 'app/views/displayNFTs.html',
            controller: 'nftTrendingController'
        })
        .when('/coinDetails/:coinId', {
            templateUrl: 'app/views/coinDetails.html',
            controller: 'coinDetailsController'
        })
        .when('/exchanges', {
            templateUrl: 'app/views/coinTickersExchange.html',
            controller: 'coinTickersExchange' 
        })
        .otherwise({
            redirectTo: '/' // Redirect to home for invalid routes
        });

    // Enable HTML5 mode to remove hashbang
    $locationProvider.html5Mode({
        enabled: true, // Enable clean URLs
        requireBase: true // Ensure base tag exists in index.html
    });
});