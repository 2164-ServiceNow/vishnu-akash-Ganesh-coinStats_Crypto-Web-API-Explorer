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
                // Log the full response to see its structure
                console.log('API Response:', response); 
                console.log("Full API Response:", JSON.stringify(response.data, null, 2)); //New log statement here
                //Access coins correctly based on what you see in the new log
                const coins = response.data.result || []; 
                return coins;
            })
            .catch(function(error) {
                console.error('Error fetching coin data:', error);
                return [];  // Return an empty array in case of an error
            });
    };
});
