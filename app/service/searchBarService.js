app.service('searchBarService', ['$http', function($http) {
    const options = {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
        }
    };

    // Fetch a specific coin by its ID
    this.getCoinById = function(coinId) {
        return $http.get(`https://openapiv1.coinstats.app/coins/${coinId}`, options)
            .then(function(response) {
                console.log('Coin Data:', response);
                return response.data || null;
            })
            .catch(function(error) {
                console.error(`Error fetching data for coin ID ${coinId}:`, error);
                return null; 
            });
    };

    // Fetch historical average price for a specific coin
    this.getAveragePrice = function(coinId, timestamp) {
        return $http.get(`https://openapiv1.coinstats.app/coins/price/avg?coinId=${coinId}&timestamp=${timestamp}`, options)
            .then(function(response) {
                console.log('Historical Average Price:', response);
                return response.data || null;
            })
            .catch(function(error) {
                console.error(`Error fetching average price for coin ID ${coinId}:`, error);
                return null;
            });
    };
}]);
