angular.module('meuSite')
        .controller('PostController', ['$scope', '$location', function ($scope, $location) {
                var postJSON = window.sessionStorage.getItem("post");
                $scope.post = JSON.parse(postJSON);
                $scope.urlFacebook = window.location.href;
            }]);