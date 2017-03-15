angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.fazerLogin = function(email, senha) {
    alert(email + senha);
  }

  $scope.novoCadastro = function(email, senha) {

    Login.novo(email, senha, function(error) {
      alert(error)
    });

  }
})

.controller('TarefasCtrl', function($scope) {
  $scope.tarefas = [
    {
      nome: 'Bruno'
    },
    {
      nome: 'Ferreira'
    },
    {
      nome: 'Ravanhani'
    }
  ];
})