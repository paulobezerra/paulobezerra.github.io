angular.module("meuSite").directive('post', [function () {
        return {
            restrict: 'E',
            scope: {
                postData:'=postData',
                resumido:'=resumido'
            },
            templateUrl: 'templates/post.html'
        };
    }]);



