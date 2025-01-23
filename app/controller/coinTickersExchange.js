app.controller('coinTickersExchange', function($scope, coinTickersExchangeService) {
    // Fetch exchanges when the controller is loaded
    coinTickersExchangeService.getExchanges().then(function(exchanges) {
        $scope.exchanges = exchanges;
    }).catch(function(error) {
        console.error('Error fetching exchanges:', error);
    });

    // Function to display exchange information on button click
    $scope.viewExchangeDetails = function(exchange) {
        window.open(exchange.url, '_blank');
    };
});
