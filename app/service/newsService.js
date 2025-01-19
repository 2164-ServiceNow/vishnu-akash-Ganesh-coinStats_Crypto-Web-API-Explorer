app.service('newsService', function($http) {
    this.getNews = function() {
        const options = {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g=' 
            }
        };

        return $http.get('https://openapiv1.coinstats.app/news', options)
            .then(function(response) {
                console.log(response.data);
                return response.data.result || [];
            })
            .catch(function(error) {
                console.error('Error fetching news:', error);
                return [];
            });
    };
});
