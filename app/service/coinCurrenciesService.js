app.service('coinCurrenciesService', function ($http) {
    this.getCurrencies = function () {
        const options = {
            headers: {
                accept: 'application/json',
                'X-API-KEY': '30nE9ahS0gb+DQO1SMROT6DNt30G44/eceiasWiYr/g='
            }
        };

        return $http.get('https://openapiv1.coinstats.app/currencies', options)
            .then(function (response) {
                const currencies = [];
                for (const currency in response.data.result) {
                    currencies.push({
                        code: currency,
                        rate: response.data.result[currency]
                    });
                }
                return currencies;
            })
            .catch(function (error) {
                console.error('Error fetching fiat currencies:', error);
                throw error;
            });
    };
});