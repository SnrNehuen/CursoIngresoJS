/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var miaplicacion=angular.module("adivinaelnumero1",[]);

miaplicacion.controller("controladorabb1",function($scope){
	$scope.test="hola mundo";
	$scope.numeroSecreto=Math.floor((Math.random() * 3) + 1);
	$scope.form={};
	$scope.intentos=0;

	$scope.Verificar=function(){

		if ($scope.form.numero == $scope.numeroSecreto) {
			console.log("el numero es igual: ");
			console.log($scope.numeroSecreto);
		}
		else
		{
			console.log("los numeros son distintos");
			$scope.intentos=$scope.intentos+1;
		}
		;

	}
});