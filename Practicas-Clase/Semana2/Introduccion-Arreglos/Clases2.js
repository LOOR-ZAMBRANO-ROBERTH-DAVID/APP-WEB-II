class Persona{
    constructor(nombre)
    {
        this.nombre=nombre;
    }

    getNombre()
    {
        return this.nombre;
    }

}

const persona=new Persona("Roberth Loor");
nombre = persona.getNombre();
console.log(nombre);