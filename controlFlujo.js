console.log("hola generation");

///Flujo de Control
/*
Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las intrucciones de nuestro programa (arriba/abajo, izq.derecha). Estas instrucciones pueden ser una funcion. un console.log, un ciclo, etc.


La importancia que tiene el control de flujo radica en las posibilidad de poder ejecutar cosas o intrucciones dependiendo de una condicional( un elemento o intruccion detonante).


Condicionales
Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipuladod por el programador). Las respuestas o salidas esperadas siempre partiran de un true o un false.

Tengo la camisa limpia?
si: voy a la fiesta
no: me quedo en casa

Tengo esta cariables?
Si: ejecuto la linea 57 de mi codigo
no: ejecuto la linea 80 de mi codigo


Condicional if (si)

if nos sirce para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condicional mas sencilla, pero lo mas limitante por que solo nos da una opción.

if (condicion) {
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}


*/

//Ejemplo: Felipe va a ir a uan fiesta  y necesita tener una camisa favorita limpia para poder ir 
if (camisaLimpia = false) { //siempre tiene que se tru para que se ejecute
    console.log("Felipe va a la fiesta");
}

/*
Else (de otro modo, de lo contrario, si no)
if (condicion detonante){
    bloque de codigo que se ejecuta si la condicion es verdadera
}
else {
    bloque de codigo que se ejecuta si la codicion es falsa 
}

*/
if (camisaLimpia = true) {
    console.log("Felipe va a la fiesta");
} else {
    console.log("Felipe se queda en su casa")
}

/*
Else if 
Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. Para lograr eso, vamos a unir else con el if

if (condicion detonante){
    condicion del codigo si es verdadero
} else {
    condicion del codigo si la primera condicion es falsa y la segunda verdadera
} else {
    condicion del codigo si las dos son false

}

*/
// ejmeplo felipe tiene hambbre y quiere comer chilaquiles verdes
if (hambre = true) {
    console.log("felipe va a comer");
} else if (chilaquiles = verdes) {
    console.log("felipe como chilaquiles")
} else {
    console.log("felipe no come y se pone triste");
}


// Ejmeplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "Vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir vamos a comer. El tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir " lo siento mi ciela, seguimos programando"

alert("Hola generation");

let hora = prompt("Hola, dime un numero")




if (hora == 13) {
    console.log("vamos a descanso");
} else if (hora == 14) {
    console.log("vamos a comer")
} else {
    console.log("lo siento mi ciela seguimos programando");
}

/*
Switch (cambiar o intercambiar /segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada (estado de la variable)

Evalua una expresion comprando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen

expresion con un valor 

switch(expresion){
   case 1:
       //bloque de codigo que s eejecuta si la opcion seleccionada es igual a 1
       break;
   case 2:
       //bloque de codigo que s eejecuta si la opcion seleccionada es igual a 2
       break;
   case 3:
       //bloque de codigo que s eejecuta si la opcion seleccionada es igual a 3
       break;

       default:
        //bloque codigo que se ejecuta si ninguna opcion coincide
}


*/


//elevador con else if
/*let piso = 5;
if (piso == 1) {
    console.log("llegamos al piso 1");
} else if (piso == 2) {
    console.log("llegamos al piso 2")
} else if (piso == 3) {
    console.log("llegamos al piso 3")
} else if (piso == 4) {
    console.log("llegamos al piso 4")
} else if (piso == 5) {
    console.log("llegamos al piso 5")
} else {
    console.log("Piso no encontrado");
}
*/

/// Elevador con switch
let pisoSwitch = prompt("A que piso vas?");

switch (pisoSwitch) {
    case "1":
        console.log("LLegaste al piso 1");
        break;

    case "2":
        console.log("LLegaste al piso 2");
        break;
    case "3":
        console.log("LLegaste al piso 3");
        break;
    case "4":
        console.log("LLegaste al piso 4");
        break;
    default:
        console.log("opcion no valida");
}

/// Funciones aplicables a un consultorio dental
//Funcion calcular costo de una consulta (condicional)
//Varianles para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let especialidad;
let promocion;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {

    //datos que necesito para mi funcion
    tipoServicio = "extraccion";
    tiempoConsulta = 129;
    emergencia = true;
    costo = 5000;
    promocionClienteFrecuente = .10;



    //Calcula el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;
    //Condicional para saber si agrego otra promocion por ser cliente frecuente 
    if (clienteFrecuente==true){
        costoTotal * promocionClienteFrecuente;
    }
}


///Un ejemplo mas sencillo
function calcularCostoConsultaDos (duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;
if (clienteFrecuente){
    costoTotalConDescuento = costoTotal*.9;
} else {
    console.log(costoTotal);
}
return costoTotalConDescuento;
}

console.log(calcularCostoConsultaDos (45,15, false));

