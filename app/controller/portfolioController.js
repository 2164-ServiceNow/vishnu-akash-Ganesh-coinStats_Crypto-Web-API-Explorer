app.controller('portfolioController', function($scope, coinStatsService) {
    // Initialize an empty array to hold coin data
    $scope.coins = [];

    // Fetch coins using the service
    coinStatsService.getCoins().then(function(coins) {
        $scope.coins = coins;
    });

    // Example function to handle user actions
    $scope.addCrypto = function(crypto) {
        console.log("Added:", crypto.name);
    };
});
