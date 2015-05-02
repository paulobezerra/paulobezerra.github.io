angular.module('meuSite')
        .controller('PostController', ['$scope', function ($scope) {
                var postJSON = window.sessionStorage.getItem("post");
                $scope.post = JSON.parse(postJSON);
            }]);