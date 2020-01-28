var oriol = ["O","7","R","I","O","L"];

//    -- FASE 2 --

oriol.forEach(element => {
    if(isNaN(element)){
        if(element == "A" || element == "E" || element == "I" || element == "O" || element == "U"){
            console.log('He trobat la vocal ' + element);
        }else{
            console.log('He trobat la consontant ' + element);
        }
    }else{
        console.log('Els noms de persones no contenen el número ' + element);
    }
    
    
});

//    -- FASE 3 --

var mapaOriol = new Map();

oriol.forEach(element => {
    if(mapaOriol.has(element)){
        var aux = mapaOriol.get(element);
        mapaOriol.set(element, aux+1);
    }else{
        mapaOriol.set(element, 1);
    }
});

mapaOriol.forEach((key,value) => {
    console.log(value + ': ' + key);
});    

//    -- FASE 4 --

var barrufet = ["B","A","R","R","U","F","E","T"];
var fullName = oriol + " " + barrufet;
console.log(fullName);