//Las variables pueden ser de tipo const, let o var
//Nota: Evitar usar var



function operacion(n1, n2, operacion){


switch(operacion)
{

/**Lo ideal no es mostrar los datos por console.log sino mas bien
 * retornar el valor
 */
    case "sumar":
        return n1+n2;
        break;
    case "restar":
        return n1-n2;
        break;
    case "multiplicar":
        return n1*n2;
        break;
    case "dividir":
        return n1/n2;
        break;
    default:
        return 0;
   }
}

function saludar(nombre){
/**Concatenar puede generar problemas en la cuercion de datos */
    return `Hola buenos dias ${nombre}`;

}



//Exportar funciones
//module.exports=operacion;
/*Desestructuracion*/

/**
 * No se agrega un alias, mas bien se crea como objeto
 */
module.exports={
    funcione1: operacion,
    funcion2: saludar
} 