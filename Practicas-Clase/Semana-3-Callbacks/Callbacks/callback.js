//Calbacks

const libros =[
    {
        id: 1,
        titulo: 'LIbro uno',
        idautor:1
    },
    {
        id: 2,
        titulo: 'Libro dos',
        idautor: 1   
    },
    {
        id:3,
        titulo: 'Libro 3',
        idautor: 2
    }
]

const autores =[
    {
        id:1,
        nombre: 'Autor 1'
    },
    {
        id:2,
        nombre: 'Autor 2'
    },
    {
        id: 3,
        nombre: 'Autor 3'
    }
]


//El callback es una funcion que invoca a otra que es envidad como
//Parametro


function buscarLibroPorId(id, callback){
    const libro=libros.find((libro)=> libro.id===id);
    if(!libro){
        //si no existe el libro debo generar una exepcion
        const error=new Error();
        error.message="Libro no encontrado";
        callback(error);
        //retornar error con el callback
    }
    //llamar al callback con el libro encontrado 
    callback(null, libro);
}

//Buscar autor
function buscarAutorPorId(id, callback){
    const autor = autores.find((autor)=>autor.id===id);
    if(!autor){
        const error=new Error();
        error.message="Autor no encontrado";
        return callback(error);
    }
    callback(null, autor);
}


//Creacion de callback
buscarLibroPorId(2, (err, libro)=>{
    if(err){
        return console.log(err.message);
    }
    buscarAutorPorId(libro.idautor, (err, autor)=>{
        if(err){
            return console.log(err.message);
        
        }
        libro.autor=autor;
        console.log(libro);
    })
}
);
 