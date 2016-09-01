/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var logica=angular.module("AdivinaElNumero2",[]);

logica.controller("controlador", function($scope)
{
	$scope.numeroSecreto=Math.floor((Math.random() * 3) + 1);
	$scope.form={};
	$scope.intentos=0;
	$scope.estado="Buena suerte!";

	$scope.comenzar=function()
	{

		$scope.numeroSecreto=Math.floor((Math.random() * 3) + 1);
		$scope.estado="Buena suerte!";
		$scope.intentos=0;

	}

	$scope.Verificar=function(){

		if ($scope.form.numero == $scope.numeroSecreto)
		{
			$scope.estado="Correcto! "+$scope.numeroSecreto;

			if ($scope.intentos == 0)
			{

				$scope.estado=$scope.estado+" usted es un Psíquico";
			
			};

			if ($scope.intentos == 1)
			{

				$scope.estado=$scope.estado+" excelente percepción";
			
			};

			if ($scope.intentos == 2)
			{

				$scope.estado=$scope.estado+" Esto es suerte";
			
			};

			if ($scope.intentos == 3)
			{

				$scope.estado=$scope.estado+" Excelente técnica";
			
			};

			if ($scope.intentos == 4)
			{

				$scope.estado=$scope.estado+" usted está en la media";
			
			};		

			if ($scope.intentos > 4 && $scope.intentos < 11)
			{

				$scope.estado=$scope.estado+" falta técnica";
			
			};

			if ($scope.intentos > 11)
			{
				$scope.estado=$scope.estado+" afortunado en el amor!!";
			};									

		};

		if ($scope.form.numero > $scope.numeroSecreto)
		{
			$scope.estado="Se pasó...";
			$scope.intentos=$scope.intentos+1;
		};

		if ($scope.form.numero < $scope.numeroSecreto)
		{
			$scope.estado="Falta...";
			$scope.intentos=$scope.intentos+1;
		};

	}

});