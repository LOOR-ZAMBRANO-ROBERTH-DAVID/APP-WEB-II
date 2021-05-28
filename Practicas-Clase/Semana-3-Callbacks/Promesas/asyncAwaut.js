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



async function buscarLibroPorId(id){
    const libro = libros.find((libro)=>libro.id===id);
    if(!libro){
        const error=new Error();
        error.message="El libro no existe";
        throw error;
    }
    return libro;

}



async function buscarAutorPorId(id){
    const autor = autores.find((autor)=>autor.id===id);
    if(!autor){
        const error=new Error();
        error.message="El autor no existe";
        throw error;
    }
    return autor;
}

async function main(){
    try{
    const libro= await buscarLibroPorId(22);
    const autor = await buscarAutorPorId(libro.idautor);
    console.log(`El libro se llama ${libro.titulo} y el autor se llama ${autor.nombre}`);
    }catch (err){
        console.log(err.message)
    }
}

main();