angular.module("meuSite").directive('post', [function () {
        return {
            restrict: 'E',
            scope: {
                postData:'=postData',
                resumido:'=resumido'
            },
            templateUrl: 'app/view/templates/post.html'
        };
    }]);



