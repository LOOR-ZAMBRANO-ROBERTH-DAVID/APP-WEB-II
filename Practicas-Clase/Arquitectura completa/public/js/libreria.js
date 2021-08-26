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

}) 