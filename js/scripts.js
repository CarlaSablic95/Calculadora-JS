// Muestra el primer operador en el visor y va concatenando cada número que se ingresa

  function ingresar(num) {
   var primerOperador = document.getElementById('visor').value += num;

}

// Función que borra el valor actual del display

 var signoMat;
 var primerOperador;

 function operar(signo){ 
 	primerOperador = document.getElementById('visor').value;
	signoMat = signo;
 	document.getElementById('visor').value = "";
}

// Funcion que muestra el resultado

  function mostrarResultado() {

	 var segundoOperador = document.getElementById('visor').value;

	 primerOperador = parseInt(primerOperador);
	 segundoOperador = parseInt(segundoOperador);

	switch (signoMat) {
		case "+":
 			document.getElementById('visor').value = primerOperador + segundoOperador;
		break

		case "-":
			document.getElementById('visor').value = primerOperador - segundoOperador;
 		break

 		case "*":
 			document.getElementById('visor').value = primerOperador * segundoOperador;
		break

		case "/":
 			document.getElementById('visor').value = primerOperador / segundoOperador;
	
 		default:
			
 	}
 }

//Funcion que borra el display
function borrar() {
	document.getElementById('visor').value = "";
}