/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var logica=angular.module("FerreteFacturacion",[]);

logica.controller("controlador", function($scope)
{
	$scope.form={};
	$scope.resultado=0;

	$scope.Sumar=function()
	{
		$scope.resultado=Number($scope.form.numeroUno)+Number($scope.form.numeroDos)+Number($scope.form.numeroTres);
	}

	$scope.Promedio=function()
	{
		$scope.resultado=(Number($scope.form.numeroUno)+Number($scope.form.numeroDos)+Number($scope.form.numeroTres))/3;
	}

	$scope.PrecioFinal=function()
	{
		$scope.resultado=(Number($scope.form.numeroUno)+Number($scope.form.numeroDos)+Number($scope.form.numeroTres))*1.21;
	}

});