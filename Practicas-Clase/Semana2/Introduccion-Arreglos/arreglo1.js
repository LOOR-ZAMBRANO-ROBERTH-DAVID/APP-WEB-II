const frutas = [
    "mamzana",
    "guineo",
    "pera",
    "guayaba",
    function(){
        return ('ok');
    }
]

const otrasFrutas =[
    "chirimoya",
    "sandia",
]



/**Tambien se puede extender un objeto o arreglo con el spread*/
const arreglo={...frutas};
console.log(arreglo);



//console.log(frutas[4]());

/**Descructuracion de un Array */
/*
const [,,,,funcionx] = frutas;

console.log(    funcionx()  );
*/
