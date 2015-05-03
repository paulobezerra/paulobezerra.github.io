angular.module("meuSite").directive('slideshare', [function () {
        return {
            restrict: 'E',
            scope: {
                urlApresentacaoEmbed:'=urlApresentacaoEmbed',
                urlApresentacao:'=urlApresentacao',
                urlPerfil:'=urlPerfil',
                nomePerfil:'=nomePerfil',
                titulo:'=titulo'
            },
            templateUrl: 'app/view/templates/slideshare.html'
        };
    }]);



