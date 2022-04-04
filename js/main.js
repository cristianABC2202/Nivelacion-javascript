function estatura() {

    var nombre;
    var estatura;

    nombre = (prompt("digite su nombre"));
    estatura = (prompt("digite su estatura"));

    if (estatura >= 1.70) {
        alert(nombre + " es aceptado");


    }
    else if (estatura <= 1.70) {
        alert(nombre + " no es aceptado");
    }
}

function mayor_edad() {
    var edad = prompt("Introduce tu edad");

    if (edad >= 18) {
        alert("ya es apto para conducir");


    }
    else if (edad <= 18) {
        alert("aun no es apto para conducir");
    }
}

function vida() {

    var diasvida = parseInt(prompt("ingresa los dias que has vivido"));
    var numAnos = Math.floor(diasvida / 365);
    var diasRestantes = diasvida - (numAnos * 365);
    var numMeses = Math.floor(diasRestantes / 30);
    diasRestantes = diasRestantes - (numMeses * 30);
    alert("ha vivido: " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " dias.");
}

function servicio(){

    var edad = parseInt(prompt("ingrese edad"));

    if (edad >= 18){
        alert("debe prestar servivio militar");
    }
    else if (edad < 18){
        alert("aun no es apto para prestar servicio militar");
    }
}

function nota(){

do {
	var nota = prompt("Introduce la nota");
	
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Excelente"); 5
			}
			else if (nota = 10) {
				alert("Sobresaliente");
			}
		}
		else {
			alert("La nota no coincide");
		}
	}
} while (nota != undefined);

}





