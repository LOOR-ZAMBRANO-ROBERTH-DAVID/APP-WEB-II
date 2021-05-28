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

//La promesa o se resuelve o se rechaza

function buscarLibroPorId(id){
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=>libro.id===id);
        if(!libro){
            const error=new Error();
            error.message="Libro no encontrado";
            reject(error);
        }
        resolve(libro);
    })
}

function buscarAutorPorId(id){
    return Promise((resolve, reject)=>{
        const autor = autores.find((autor)=>autor.id===id);
        if (!autor){
            const error=new Error();            
            error.message="Autor no encontrado";
            reject(error);
        }
        resolve(autor);
    })

}