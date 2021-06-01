const bocaditos=[
    {
        id: 'p1',
        nombre: 'Pack 1',
        description: '15 empanadillas, 15 deditos, 20 bolitas de carne, 15 sandwiches',
    },
    {
        id:'p2',
        nombre: 'Pack 2',
        description: '20 empanadillas, 20 deditos, 25 bolitas de carne, 20 sandwiches',
    },
    {
        id:'p3',
        nombre: 'Pack 3',
        description: '30 empanadillas, 30 deditos, 35 bolitas de carne, 30 sandwiches',
    },
    {
        id:'p4',
        nombre: 'Pack 4',
        description: '40 empanadillas, 40 deditos, 45 bolitas de carne, 40 sandwiches, Adicional: Cola de 3 litros',
    },


]
const  clientes=[
    {
        id:'c1',
        nombre: 'Roberth Loor',
    },
    {
        id:'c2',
        nombre: 'David Zambrano',
    },
    {
        id:'c3',
        nombre: 'Pablo Palacios',
    }
]
const pedidos=[
    {
        id:'pp1',
        idcliente: 'c1',
        idbocadito: 'p1',
        fecha: '30 de Mayo del 2021',
    },
    {
        id:'pp2',
        idcliente: 'c2',
        idbocadito: 'p2',
        fecha: '29 de Mayo del 2021',
    },
    {
        id:'pp3',
        idcliente: 'c1',
        idbocadito: 'p3',
        fecha: '31 de Mayo del 2021',
    }
]


//Usaremos la estructura de la promesa para buscar el cliente al cual
//Pertenece un pedido X 
function buscarPedidoPorId(id){
    return new Promise((resolve, reject)=>{
        const pedido=pedidos.find((pedido)=> pedido.id===id);
        if(!pedido){
            const error=new Error();
            error.message='Pedido no existente';
            reject(error);
        }
        resolve (pedido)
    })

}
function buscarClientePorId(id){
    return new Promise((resolve, reject)=>{
        const cliente=clientes.find((cliente)=>cliente.id===id)
        if(!cliente){
            const error = new Error();
            error.message='Cliente no encontrado';
            reject(error);
        }
        resolve (cliente)
    })
}










let pedidoAuxiliar={};

buscarPedidoPorId('pp1').then((pedido)=>{
    pedidoAuxiliar=pedido;
    return buscarClientePorId(pedido.idcliente);

}).then((cliente)=>{
    pedidoAuxiliar.cliente=cliente;
    delete pedidoAuxiliar.idcliente;
    console.log(pedidoAuxiliar);

}).catch((error)=>{
    console.log(error.message)
})

