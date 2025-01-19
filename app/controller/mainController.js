app.controller('mainController', function($scope, newsService) {
    $scope.message = "Welcome to the Crypto Dashboard!";
    $scope.newsArticles = [];

    newsService.getNews().then(function(news) {
        $scope.newsArticles = news;
        console.log($scope.newsArticles);  // Check that data is assigned
    }).catch(function(error) {
        console.log('Error in fetching news:', error);
    });
});
