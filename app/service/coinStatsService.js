app.service('coinStatsService', function($http) {
    this.getCoins = function() {
        const options = {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
            }
        };

        // Return the result of the $http.get method
        return $http.get('https://openapiv1.coinstats.app/coins', options)
            .then(function(response) {
                console.log('API Response:', response); // Log the full response to see its structure
                // Return the coins array
                return response.data.coins || [];  // Ensure it defaults to an empty array if no coins are present
            })
            .catch(function(error) {
                console.error('Error fetching coin data:', error);
                return [];  // Return an empty array in case of an error
            });
    };
});
