app.service('coinStatsService', function($http) {
    // Function to fetch coin data from the API
    this.getCoins = function() {
        return $http.get('https://api.coinstats.app/public/v1/coins')
            .then(function(response) {
                return response.data.coins; // Return only the coins array
            })
            .catch(function(error) {
                console.error("Error fetching coin data:", error);
                return []; // Return an empty array in case of an error
            });
    };
});
