//Hay dos tipos de funciones, normales y de fecha

function saludar(nombre){
    console.log(`Hola como estas ${nombre}`);
}

const saludar2 = function(nombre)
{
    //this
    console.log(`Hola como estas mi estimado ${nombre}`);
}


//Funciones arrow
/**A las funciones normales tiene su propio contexto
 * Una funcion flecha no lo necesita.
 */



const saludar3 = (nombre)=>{
    console.log(`Hola como estas, ${nombre}`);
}

function llamarFuncionParaSaludar(fn, parametro){
    fn(parametro);
}

llamarFuncionParaSaludar(saludar2, "Roberth");