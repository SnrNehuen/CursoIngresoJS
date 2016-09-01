/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var logica=angular.module("FerreteIluminacion",[]);

logica.controller("controlador", function($scope)
{
	$scope.form={};
	$scope.resultado=0;
	$scope.precio=35;

	$scope.CalcularPrecio=function()
	{
		
		Number($scope.form.cantidad);
		Number($scope.form.seleccion);

		if ($scope.form.cantidad < 3)
		{
			$scope.resultado=$scope.precio*$scope.form.cantidad;
		};
		
		if ($scope.form.cantidad == 3)
		{
			if ($scope.form.seleccion == 1)
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.85;
			};

			if ($scope.form.seleccion == 2)
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.9;
			}
			else
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.95;
			};
			
		};

		if ($scope.form.cantidad == 4)
		{

			if ($scope.form.seleccion < 3)
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.75;
			}
			else
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.8;
			};
			
		};

		if ($scope.form.cantidad == 5)
		{

			if ($scope.form.seleccion == 1)
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.6;
			}
			else
			{
				$scope.resultado=$scope.precio*$scope.form.cantidad*0.7;
			};
			
		};	

		if ($scope.form.cantidad > 5)
		{

			$scope.resultado=$scope.precio*$scope.form.cantidad*0.5;

		};

		if ($scope.resultado > 120)
		{

			$scope.sinRecargo=$scope.resultado;
			$scope.conRecargo=$scope.resultado*1.1;
			$scope.recargo=$scope.conRecargo-$scope.sinRecargo;
			$scope.resultado="IIBB Usted pago "+$scope.conRecargo+", siendo "+$scope.recargo+" el impuesto que se pagó.";

		};
		
	}

	$scope.Circulo=function()
	{
		$scope.resultado=3*2*Number($scope.form.radio)*Math.PI;
	}

	$scope.Materiales=function()
	{
		$scope.resultado=Number($scope.form.largo)*Number($scope.form.ancho);
		$scope.cal=($scope.resultado*3).toString();
		$scope.cemento=($scope.resultado*2).toString();
		$scope.resultado=$scope.cal+" bolsas de cal y "+$scope.cemento+" bolsas de cemento";
	}

});