//Las variables pueden ser de tipo const, let o var
//Nota: Evitar usar var


function operacion(n1, n2, operacion){

switch(operacion)
{
    case "sumar":
        console.log(n1+n2);
        break;
    case "restar":
        console.log(n1-n2);
        break;
    case "multiplicar":
        console.log(n1*n2);
        break;
    case "dividir":
        console.log(n1/n2);
        break;
    default:
        console.log(`La operacion ${operacion} no se encuentra definida`)
   }
}

function saludar(nombre){
    console.log(`Hola buenos dias ${nombre}`);

}



//Exportar funciones
//module.exports=operacion;
/*Desestructuracion*/
module.exports={
    operacion,
    saludar
} 