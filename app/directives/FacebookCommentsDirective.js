angular.module("meuSite").directive('facebookComments', [function () {
        return {
            restrict: 'E',
            scope: {
                url:'=url'
            },
            templateUrl: 'app/view/templates/facebook_comments.html'
        };
    }]);



