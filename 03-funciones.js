holaMundo(); // Hola mundo

function holaMundo() {
    console.log('Hola mundo');
}

console.log(holaMundo()); // undefined

function sumarDosNumeros(numeroUno, numeroDos) {
    var esNumeroUnoNumber = typeof numeroUno == 'number';
    var esNumeroDosNumber = typeof numeroDos == 'number';
    if (esNumeroUnoNumber && esNumeroDosNumber) {
        return numeroUno + numeroDos;
    } else {
        console.error('No envia numeros');
        return 0;
    }
}

console.log(sumarDosNumeros(1, 2));

console.log(sumarDosNumeros("adrian", true, 3, 4, 5, 6, 7));


function sumarNNumeros(...numeros) {

    var respuesta = sumarNumerosDesdeUnArreglo(numeros);

    if (respuesta.noEsNumber) {
        console.error('No envia numeros');
        return 0;
    } else {
        return respuesta.resultado;
    }
}

function sumarNumerosDesdeUnArreglo(numeros) {
    var tieneUnParametroDiferenteDeNumber = false;
    var resultado = 0;
    for (var i = 0; i < numeros.length; i++) {
        var esNumeroNumber = typeof numeros[i] == 'number';
        if (!esNumeroNumber) {
            tieneUnParametroDiferenteDeNumber = true;
        } else {
            resultado = resultado + numeros[i]
        }
    }

    var respuesta = {
        noEsNumber: tieneUnParametroDiferenteDeNumber,
        resultado: resultado
    };

    return respuesta;
}

console.log(sumarNNumeros(1, 2, 3, 4, 5));
console.log(sumarNNumeros(1, 2, 3, 4, "asd"));


function saludarEnUpperCase(nombre, funcion) {
    return `Hola ${funcion(nombre)}`; // template strings
}

console.log(saludarEnUpperCase("adrian", convertirStringEnMayuscula));
console.log(saludarEnUpperCase("VICENTE", convertirStringEnMinuscula));
console.log(saludarEnUpperCase("Buen dia", anadirPuntoAlFinal));

function convertirStringEnMayuscula(texto) {
    return texto.toUpperCase();
}

function convertirStringEnMinuscula(texto) {
    return texto.toLowerCase();
}

function anadirPuntoAlFinal(texto) {
    return texto + ".";
}

function primeraLetraEnMayuscula(texto) {
    var primeraLetraMayuscula = texto[0].toUpperCase();
    var restoPalabra = texto.slice(1, texto.length);
    return primeraLetraMayuscula + restoPalabra;
}
console.log(saludarEnUpperCase("adrian",primeraLetraEnMayuscula));








