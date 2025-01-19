app.service('coinDetailsService', function ($http) {
    this.getCoinDetails = function (coinId) {
        const options = {
            headers: {
                accept: 'application/json',
                'X-API-KEY': 'apiKey30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
            }
        };

        return $http.get(`https://openapiv1.coinstats.app/coins/${coinId}`, options)
            .then(function (response) {
                console.log('Coin Details Response:', response); // Debug API response
                return response.data;
            })
            .catch(function (error) {
                console.error('Error fetching coin details:', error);
                throw error;
            });
    };
});