angular.module("meuSite").directive('post', [function () {
        return {
            restrict: 'E',
            scope: {
                postData:'=postData',
            },
            templateUrl: 'app/view/templates/post.html'
        };
    }]);



