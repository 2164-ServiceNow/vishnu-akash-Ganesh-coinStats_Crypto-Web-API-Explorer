app.service('searchBarService', ['$http', function($http) {
    // HTTP options, including headers
    const options = {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
        }
    };

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
}]);
