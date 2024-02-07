/*Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
*/

alert('BIemvenida y Bienevenido a nuestro sitio web');

/*Declara una variable llamada nombre y asígnale el valor "Luna".*/
let nombre = 'Luna';

/*Crea una variable llamada edady asígnale el valor 25.*/
 let edad = 25;

 /*Establece una variable numeroDeVentas y asígnale el valor 50. */
let numeroDeVentas = 50;

/*Establece una variable saldoDisponible y asígnale el valor 1000.*/ 
let saldoDisponible = 1000;

/* Muestra una alerta con el texto "¡Error! Completa todos los campos".*/
alert('¡Error! Completa todos los campos');


/*Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError . */
let mensajeDeError = '¡Error! Preencha todos los campos';
alert(mensajeDeError);

/*Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre . */
let nombre1 = prompt('Digite su nombre');

/*Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad. */
let edad1 = prompt('Digite su edad');

/*Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". */
let edad2 = ('Digite su edad :');
if (edad2 >= 18){
    alert('¡Puede obtener su licencia de conducir!');
}


// Desafio de condicionales y concatenacion 

// 1-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaDeLaSemana = prompt ('¿que dia de la semana es?');

if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo'){
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

//2- Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
