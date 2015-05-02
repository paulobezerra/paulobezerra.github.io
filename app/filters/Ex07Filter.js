angular.module("myApp")
    .filter('pessoaFilter', ['$filter', function($filter) {
      return function(pessoa) {
        pessoa = pessoa || '';
        var out = '';
        if (pessoa.nome){
           out += pessoa.nome+", ";
        }
        if (pessoa.nascimento){
           nascimento = $filter('date')(pessoa.nascimento, "dd/MM/yyyy");
           out += "nascido em "+ nascimento +", ";
        }

        if (pessoa.profissao){
           out += pessoa.profissao+", ";
        }

        if (pessoa.salario){
           salario = $filter('currency')(pessoa.salario, "R$ ");
           out += " renda mensal "+salario +".";
        }

        return out;
      };
    }]);