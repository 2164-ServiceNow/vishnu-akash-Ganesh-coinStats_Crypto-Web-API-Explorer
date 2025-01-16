app.controller('displayAllCoins', function ($scope, coinStatsService) {
    $scope.coins = [];
    $scope.displayedCoins = [];
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

    coinStatsService.getCoins().then(function (coins) {
        console.log("Fetched Coins:", coins); // Log the entire coins array
        if (coins.length > 0) {
            $scope.coins = coins;
            console.log("coins assigned to $scope.coins:", $scope.coins); // Check $scope.coins after assignment
            $scope.updateDisplayedCoins();
            console.log("$scope.displayedCoins after update:", $scope.displayedCoins); //Check $scope.displayedCoins after update
        } else {
            console.log("No coins data available.");
        }
    }).catch(function (error) {
        console.error('Error fetching coins:', error);
    });

    $scope.updateDisplayedCoins = function () {
        const start = ($scope.currentPage - 1) * $scope.itemsPerPage;
        const end = start + $scope.itemsPerPage;
        $scope.displayedCoins = $scope.coins.slice(start, end);
    };

    $scope.nextPage = function () {
        if ($scope.currentPage * $scope.itemsPerPage < $scope.coins.length) {
            $scope.currentPage++;
            $scope.updateDisplayedCoins();
        }
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.updateDisplayedCoins();
        }
    };
});
