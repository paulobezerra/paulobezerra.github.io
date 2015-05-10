angular.module("meuSite").directive('singlePost', [function () {
        return {
            restrict: 'E',
            scope: {
                postData:'=postData',
            },
            templateUrl: 'app/view/templates/single-post.html'
        };
    }]);



