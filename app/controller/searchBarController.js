app.controller('searchBarController', ['$scope', 'searchBarService', function($scope, searchBarService) {
    $scope.searchCoin = function() {
        if ($scope.searchQuery) {
            searchBarService.getCoinById($scope.searchQuery)
                .then(function(data) {
                    $scope.coinData = data;
                    $scope.error = null;
                })
                .catch(function() {
                    $scope.error = 'Coin not found.';
                    $scope.coinData = null;
                });
        } else {
            $scope.error = 'Please enter a coin ID.';
        }
    };
}]);
