app.controller('searchBarController', ['$scope', '$timeout', 'searchBarService', function($scope, $timeout, searchBarService) {
    $scope.searchQuery = '';                // Store user input (coin ID)
    $scope.coinData = null;                 // Store the result for the coin details
    $scope.averagePriceData = null;         // Store the result for the average price
    $scope.error = null;                    // Error message

    // Function to search for a coin (without fetching average price automatically)
    $scope.searchCoin = function() {
        if ($scope.searchQuery) {
            // Get coin details
            searchBarService.getCoinById($scope.searchQuery)
                .then(function(data) {
                    $timeout(function() {
                        $scope.coinData = data;
                        $scope.averagePriceData = null;
                        $scope.error = null;
                    });
                })
                .catch(function() {
                    $timeout(function() {
                        $scope.error = 'Coin not found. Please try a different ID.';
                        $scope.coinData = null;
                        $scope.averagePriceData = null;
                    });
                });
        } else {
            $scope.error = 'Please enter a coin ID.';
        }
    };

    // Function to fetch average price for the coin over different time periods (1w, 1m, 6m, 1y)
    $scope.getAveragePrice = function(timePeriod) {
        let timestamp = Math.floor(Date.now() / 1000);  // Current timestamp in seconds
        let pastTimestamp;

        switch (timePeriod) {
            case '1w':
                pastTimestamp = timestamp - (7 * 24 * 60 * 60); // 1 week ago
                break;
            case '1m':
                pastTimestamp = timestamp - (30 * 24 * 60 * 60); // 1 month ago
                break;
            case '6m':
                pastTimestamp = timestamp - (6 * 30 * 24 * 60 * 60); // 6 months ago
                break;
            case '1y':
                pastTimestamp = timestamp - (365 * 24 * 60 * 60); // 1 year ago
                break;
            default:
                pastTimestamp = timestamp; // Default to current time if no valid period
        }

        // Fetch the historical average price
        searchBarService.getAveragePrice($scope.searchQuery, pastTimestamp)
            .then(function(data) {
                $timeout(function() {
                    // Assuming the API returns a response with the coin prices for USD
                    $scope.averagePriceData = {
                        coinId: $scope.searchQuery,
                        price: data.USD, // Use the USD value from the response
                        timestamp: new Date(pastTimestamp * 1000) // Convert timestamp to a readable date
                    };
                    $scope.coinData = null;
                    $scope.error = null;
                });
            })
            .catch(function() {
                $timeout(function() {
                    $scope.error = 'Error fetching average price. Please try again.';
                    $scope.coinData = null;
                    $scope.averagePriceData = null;
                });
            });
    };
}]);
