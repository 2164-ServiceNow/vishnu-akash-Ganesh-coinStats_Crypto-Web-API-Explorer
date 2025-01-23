app.service('coinStatsService', function($http) {
    // Function to get a list of supported exchanges
    this.getExchanges = function() {
        const options = {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
            }
        };

        // Make the HTTP request to the endpoint
        return $http.get('https://openapiv1.coinstats.app/tickers/exchanges', options)
            .then(function(response) {
                console.log('API Response:', response); // Log the response to see its structure
                // Return the list of exchanges or an empty array in case of an error
                return response.data.result || []; 
            })
            .catch(function(error) {
                console.error('Error fetching exchange data:', error);
                return []; // Return an empty array in case of an error
            });
    };
});
