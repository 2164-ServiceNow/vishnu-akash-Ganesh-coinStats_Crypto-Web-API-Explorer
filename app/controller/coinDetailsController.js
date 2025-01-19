app.controller('coinDetailsController', function ($scope, $routeParams, coinDetailsService) {
    $scope.loading = true;
    $scope.error = null;
    $scope.coinDetails = null;

    // Extract `coinId` from the route parameters
    const coinId = $routeParams.coinId;

    // Use the service to fetch coin details
    coinDetailsService
        .getCoinDetails(coinId)
        .then(function (data) {
            $scope.coinDetails = data;
            $scope.loading = false;
        })
        .catch(function () {
            $scope.error = "Failed to load coin details. Please try again.";
            $scope.loading = false;
        });
});