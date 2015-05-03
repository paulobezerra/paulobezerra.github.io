angular.module('meuSite')
        .controller('PageController', ['$scope', '$routeParams', function ($scope, $routeParams) {
                $scope.page = 'app/view/pages/'+$routeParams.page+'.html';
            }]);