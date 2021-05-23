

let prueba = 5;
 

const persona = {
    nombre: 'Roberth',
    apellido: 'Loor',
    esEstudiante: true,
    prueba,
    geolocalizacion: {
        lat: 23.345678,
        lng: 11.56789
    },
    getNombreCompleto(){
        return this.nombre+ " "+ this.apellido; 
    }
}



function mostrarDatosDeLaPersona({nombre, geolocalizacion:{lat, lng}})
{
    console.log(nombre);
    console.log(lng)
}

mostrarDatosDeLaPersona(persona);







/**La inmutabilidad nos permite que alguien mas pueda cambiar la
 * estructura del objeto
 */





/*
const estudiante= {...persona}


//persona="hola";
estudiante.nombre="Luis";
console.log(persona);
*/





/*

function mostrarDatosDeLaPersona({nombre})
{
    console.log(nombre);
}

mostrarDatosDeLaPersona(persona);
*/