TinyTwitter.controller("trendingTweets", function($scope, $http){
    $scope.trendMsg = "Political games in India";
    $scope.getTweets = function(){
        $http.get("https://movieapp-sitepointdemos.rhcloud.com/api/movies").success(function(res){
            console.log("get success", res);
            $scope.tweets = res;
        });    
    };
});