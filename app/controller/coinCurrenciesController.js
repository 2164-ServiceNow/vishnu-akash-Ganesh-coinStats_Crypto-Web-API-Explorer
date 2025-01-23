app.controller('coinCurrenciesController', function ($scope, coinCurrenciesService) {
    $scope.loading = true;
    $scope.error = null;
    $scope.currencies = [];

    // Fetch fiat currencies
    coinCurrenciesService
        .getCurrencies()
        .then(function (data) {
            $scope.currencies = data;
            $scope.loading = false;
        })
        .catch(function () {
            $scope.error = "Failed to load currencies. Please try again.";
            $scope.loading = false;
        });

    // Function to get exchange rate for selected currency
    $scope.getExchangeRate = function (currencyCode) {
        const selectedCurrency = $scope.currencies.find(currency => currency.code === currencyCode);
        return selectedCurrency ? selectedCurrency.rate : 0;
    };
});
