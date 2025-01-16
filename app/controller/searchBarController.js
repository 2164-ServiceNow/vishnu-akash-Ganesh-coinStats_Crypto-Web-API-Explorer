app.controller('searchBarController', ['$scope', '$timeout', 'searchBarService', function($scope, $timeout, searchBarService) {
    $scope.searchQuery = '';
    $scope.coinData = null;
    $scope.error = null;

    // Fetch a specific coin by ID
    $scope.searchCoin = function() {
        if ($scope.searchQuery) {
            searchBarService.getCoinById($scope.searchQuery)
                .then(function(data) {
                    $timeout(function() {
                        $scope.coinData = data; // Assuming data is the coin object
                        $scope.error = null;
                    });
                })
                .catch(function() {
                    $timeout(function() {
                        $scope.error = 'Coin not found. Please try a different ID.';
                        $scope.coinData = null;
                    });
                });
        } else {
            $scope.error = 'Please enter a coin ID.';
        }
    };
}]);
