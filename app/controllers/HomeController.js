angular.module('meuSite')
        .controller('HomeController', ['$scope', '$http', "$location", function ($scope, $http, $location) {
                $http.get('data/posts.json').success(
                        function (data) {
                            $scope.posts = data;
                        });
                        
                        $scope.irParaPost = function(post){
                            window.sessionStorage.setItem('post', JSON.stringify(post));
                            $location.path('post/'+post.url);
                            window.fbAsyncInit();
                        };
            }]);