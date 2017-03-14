angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

// CRIANDO VARIAIES
  $scope.email = '';
  $scope.senha = '';

// CRIANDO FUNÇÃO
$scope.fazerLogin = function(email, senha) {
  alert(email + senha);
}


$scope.novoCadastro = function(email, senha) {
  alert(email + '-------' + senha);
}


})

