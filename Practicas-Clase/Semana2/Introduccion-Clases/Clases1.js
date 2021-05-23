/**Las clases se definen como un json */

let prueba = 5;
 

const persona = {
    nombre: 'Roberth',
    apellido: 'Loor',
    esEstudiante: true,
    prueba,
    getNombreCompleto(){
        return this.nombre+ " "+ this.apellido; 
    }
}

//  persona.nombre='Juan';
/**A pesar de ser definido como constante, se puede cambiar
 * el nomnre, no se puede modificar el objeto pero si los atributos 
 * del objeto
 */

function mostrarDatosDeLaPersona({nombre})
{
    console.log(nombre);
}

mostrarDatosDeLaPersona(persona);

/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getNombreCompleto());
console.log(persona.prueba);

*/