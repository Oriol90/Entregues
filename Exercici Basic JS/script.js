//  --  Exercici 1 --

console.log('Hola mundo.');

//  --  Exercici 2 --

alert('Hola, el meu nom es Oriol.');

//  --  Exercici 3 --

var nom = 'Oriol';
var cognom = 'Barrufet';

//  --  Exercici 4 --

var num1 = 34;
var num2 = 56;
var resultat = 34+56;
console.log('La suma entre ' + num1 + ' i ' + num2 + ' es ' + resultat + '.');

//  --  Exercici 5 --

var nota_examen = 4.99;  
var resultatExamen = 'suspendido';
if(nota_examen >= 5){
    resultatExamen = 'aprovado';
}
alert('Has ' + resultatExamen + ' el examen con un ' + nota_examen + '.');

//  --  Exercici 6 --

var cadena = "Tinc un cotxe de color blau.";
var modificacioBlau = cadena.replace("blau","verd");
var modificacioVocal = "";

for(var i = 0; i<cadena.length; i++){
    var lletra;
    if(cadena.charAt(i) == "o"){
        lletra = "u";
    }else{
        lletra = cadena.charAt(i);
    }
    var modificacioVocal = modificacioVocal + lletra;
}
console.log(modificacioBlau);
console.log(modificacioVocal);


//  --  Exercici 7 --

var contador = 0;
var objectes = ["Taula","Cadira","Ordinador","Llibreta"];
objectes.forEach(element => {
    console.log('L\'objecte ' + element + ' està a la posició '+ contador + '.');
    contador++;
});

//  --  Exercici 8 --

calculadora("resta", 7, 3);
calculadora("suma", 8, 7);
calculadora("multiplicacio", 6, 4);
calculadora("Chuck Norris", 4, 7);

function calculadora(operacio, valor1, valor2){
    var resultatCalc;
    switch(operacio){
        case "resta":
            resultatCalc = valor1-valor2;
            console.log('El resultat es: ' + resultatCalc + '.');
        break;
        case "suma":
            resultatCalc = valor1+valor2;
            console.log('El resultat es: ' + resultatCalc + '.');
        break;
        case "multiplicacio":
            resultatCalc = valor1*valor2;
            console.log('El resultat es: ' + resultatCalc + '.');
        break;
        default: console.log(operacio + ' no és un operador vàlid.');        
    }
}