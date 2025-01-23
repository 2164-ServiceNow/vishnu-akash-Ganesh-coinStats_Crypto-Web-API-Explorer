app.controller('nftTrendingController', ['$scope', 'nftTrendingService', function ($scope, nftTrendingService) {
    $scope.loading = true;
    $scope.error = null;
    $scope.nfts = [];

    // Fetch trending NFTs
    nftTrendingService.getTrendingNFTs()
        .then(function (data) {
            $scope.nfts = data.data;
        })
        .catch(function (error) {
            $scope.error = 'Failed to load trending NFTs.';
        })
        .finally(function () {
            $scope.loading = false;
        });
}]);