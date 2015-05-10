angular.module('meuSite')
        .controller('PageController', ['$scope', '$routeParams', function ($scope, $routeParams) {
                $scope.page = 'pages/'+$routeParams.page+'.html';
            }]);