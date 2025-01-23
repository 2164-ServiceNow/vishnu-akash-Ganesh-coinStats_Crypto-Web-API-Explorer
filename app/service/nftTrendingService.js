app.service('nftTrendingService', ['$http', function ($http) {
    this.getTrendingNFTs = function () {
        const options = {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
            },
        };

        return $http.get('https://openapiv1.coinstats.app/nft/trending', options).then(
            function (response) {
                return response.data;
            },
            function (error) {
                console.error('Error fetching trending NFTs:', error);
                throw error;
            }
        );
    };
}]);