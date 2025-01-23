app.controller('coinTickersExchange', function($scope, coinTickersExchangeService) {
    // Initialize pagination variables
    $scope.currentPage = 1;
    $scope.itemsPerPage = 9;
    $scope.exchanges = [];
    $scope.totalExchanges = 0;

    // Fetch exchanges when the controller is loaded
    coinTickersExchangeService.getExchanges().then(function(exchanges) {
        $scope.exchanges = exchanges;
        $scope.totalExchanges = exchanges.length;
        $scope.updatePagedExchanges();
    }).catch(function(error) {
        console.error('Error fetching exchanges:', error);
    });

    // Function to display exchange information on button click
    $scope.viewExchangeDetails = function(exchange) {
        window.open(exchange.url, '_blank');
    };

    // Function to update the list of exchanges for the current page
    $scope.updatePagedExchanges = function() {
        const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        const endIndex = startIndex + $scope.itemsPerPage;
        $scope.pagedExchanges = $scope.exchanges.slice(startIndex, endIndex);
    };

    // Function to go to the next page
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.totalPages()) {
            $scope.currentPage++;
            $scope.updatePagedExchanges();
        }
    };

    // Function to go to the previous page
    $scope.prevPage = function() {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.updatePagedExchanges();
        }
    };

    // Calculate total pages
    $scope.totalPages = function() {
        return Math.ceil($scope.totalExchanges / $scope.itemsPerPage);
    };
});
