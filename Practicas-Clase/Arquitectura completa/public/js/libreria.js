window.addEventListener('load', function(){
    let htmlGenerado="";
    htmlGenerado+=`<label for="txtid">ID</label>`
    htmlGenerado+=`<input type="text" id="txtid">`
    htmlGenerado+=`<label for="txtname">Nombre</label>`
    htmlGenerado+=`<input type="text" id="txtname">`
    htmlGenerado+=`<label for="txtusername">Nombre del usuario</label>`
    htmlGenerado+=`<input type="text" id="txtusername">`
    htmlGenerado+=`<label for="txtpassword">Password</label>`
    htmlGenerado+=`<input type="text" id="txtpassword">`
    htmlGenerado+=`<button id="btnnuevo">Nuevo</button>`
    htmlGenerado+=`<button id="btngrabar">Grabar</button>`
    htmlGenerado+=`<button id="btnmodificar">Modificiar</button>`
    htmlGenerado+=`<button id="btnconsultar">Consultar</button>`
    htmlGenerado+=`<button id="btneliminar">Eliminar</button>`
    htmlGenerado+=`<div id="divcontenido"></div>`

    htmlCuerpo.innerHTML= htmlGenerado;

    btnnuevo.addEventListener('click',function(){
        txtid.value='';
        txtname.value='';
        txtusername.value='';
        txtpassword.value='';
    })
    btngrabar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/api/user`;
        let data ={
            name:txtname.value,
            username: txtusername.value,
            password: txtpassword.value
        };

        fetch(url, {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(
            res => res.json()
        ).then(res2 => console.log( res2 ))
        .catch(error=> console.log('Error', error));
    })
    btnmodificar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/api/user/${txtid.value}`;
        let data ={
            name:txtname.value,
            username: txtusername.value,
            password: txtpassword.value
        };

        fetch(url, {
            method:'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(
            res => res.json()
        ).then(res2 => console.log( res2 ))
        .catch(error=> console.log('Error', error));

    })
    btnconsultar.addEventListener('click',function(){
        fetch(`http://localhost:5000/v1/api/user`).then(resultado=>{
            return resultado.json()
        }).then(consulta=>{
            let tabla = `<table border=1>`;
            for (const elemento in consulta)
            {
                tabla+=`<tr>`; //filas
                    const actual = consulta[elemento];
                    tabla+=`<td> ${actual.name} </td>`
                    tabla+=`<td> ${actual.password} </td>`
                    tabla+=`<td> <button value='${actual._id}'>${actual.username}</button>  </td>`
                tabla+=`</tr>`;
            }
            tabla+= `</table>`;
            divcontenido.innerHTML = tabla;

        })

    })
    btneliminar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/api/user/${txtid.value}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(res2=> console.log(res2))
        .catch(error=> console.error('Error', error))
    })


}) 