/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var logica=angular.module("FerretePinturas",[]);

logica.controller("controlador", function($scope)
{
	$scope.form={};
	$scope.resultado=0;

	$scope.FahrenheitCentigrados=function()
	{
		$scope.resultado=$scope.form.temperatura+" Grados Fahrenheit son "+(((Number($scope.form.temperatura))-32)/1.8).toString()+" Grados Celsius.";
	}

	$scope.CentigradosFahrenheit=function()
	{
		$scope.resultado=$scope.form.temperatura+" Grados Celsius son "+((Number($scope.form.temperatura))*1.8+32).toString()+" Grados Fahrenheit.";
	}

});
