const mascota ={
    nombre: 'Manchas',
    edad: '5 años',
    color: 'negro'
}

const comidasFavoritas = [
    'Arroz con atun',
    'Comida "Pedigree"',
    'Pescado',
    'Galletas'
]

const mostrarComidas=()=>{
    let contador=0
    do {
        console.log(comidasFavoritas[contador]);
        contador++;
    } while (contador < comidasFavoritas.length);
} 

const comidaMayuscula=(Idcomida)=>{
    return comidasFavoritas[Idcomida].toUpperCase();
}


mostrarComidas();

console.log(comidaMayuscula(0));
