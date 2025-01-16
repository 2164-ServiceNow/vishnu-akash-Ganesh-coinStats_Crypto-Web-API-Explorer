app.controller('displayAllCoins', function($scope, coinStatsService) {
    $scope.coins = []; // All coins
    $scope.displayedCoins = []; // Coins to display on the current page
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

    // Fetch coins from the API
    coinStatsService.getCoins().then(function(coins) {
        // Check if the response has coins data
        if (coins.length > 0) {
            $scope.coins = coins;
            console.log("Fetched Coins:", $scope.coins); // Log fetched coins
            $scope.updateDisplayedCoins();
        } else {
            console.log("No coins data available.");
        }
    }).catch(function(error) {
        console.error('Error fetching coins:', error);
    });

    // Function to update displayed coins based on the current page
    $scope.updateDisplayedCoins = function() {
        const start = ($scope.currentPage - 1) * $scope.itemsPerPage;
        const end = start + $scope.itemsPerPage;
        $scope.displayedCoins = $scope.coins.slice(start, end);
    };

    // Go to the next page
    $scope.nextPage = function() {
        if ($scope.currentPage * $scope.itemsPerPage < $scope.coins.length) {
            $scope.currentPage++;
            $scope.updateDisplayedCoins();
        }
    };

    // Go to the previous page
    $scope.prevPage = function() {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.updateDisplayedCoins();
        }
    };
});
