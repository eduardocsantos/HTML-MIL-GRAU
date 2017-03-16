angular.module('starter.controllers', [])

.controller('LoginCtrl', function ($state, $scope, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.fazerLogin = function(email, senha) {
    Login.login(email, senha, function(erro) {
     if(erro){
      alert(erro);
     } else {
       $state.go('tarefas');
     }
    })
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('TarefasCtrl', function($scope) {
  $scope.tarefas = [
    {
      nome: 'Estudar: Wordpress'
    },
    {
      nome: 'Estudar: Java'
    },
    {
      nome: 'Estudar: PHP'
    }
  ];
})