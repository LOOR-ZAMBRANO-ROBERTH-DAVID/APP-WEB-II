
const calcularTablaMultiplicar=(contador, numero)=>{
    if(contador <=12){
        console.log(`${numero} x ${contador} = ${numero*contador}`);
        calcularTablaMultiplicar(contador+1, numero);
    }
}

calcularTablaMultiplicar(1, 5);