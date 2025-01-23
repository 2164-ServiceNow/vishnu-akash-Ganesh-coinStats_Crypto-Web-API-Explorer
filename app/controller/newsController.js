app.controller('newsController', function($scope, newsService) {
    $scope.newsArticles = [];
    $scope.error = '';

    // Fetch news from the service
    newsService.getNews().then(function(news) {
        $scope.newsArticles = news;
    }).catch(function(error) {
        console.log('Error fetching news:', error);
        $scope.error = "Unable to load news at the moment.";
    });
});
