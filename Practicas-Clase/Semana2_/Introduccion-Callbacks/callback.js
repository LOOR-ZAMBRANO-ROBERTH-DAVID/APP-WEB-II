/**Data */
const libros =[
    {
        id:1,
        titulo: 'Libro 1'
    },
    {
        id:2,
        titulo: 'Libro 2'
    }
]



function buscarLibroPorId(id, callback)
{
    const libro= libros.find((libro)=> libro.id==id);
    
    if(!libro){
        //Generar una exepcion

        //retornar ese error con el callback


    }

    //invocar en el callback
}