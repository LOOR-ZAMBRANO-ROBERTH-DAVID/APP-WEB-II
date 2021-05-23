const estudiantes = new Map();

/**Clave valor */
estudiantes.set("uno", "Carlos");
estudiantes.set("dos", "Pedro");
estudiantes.set("tres", ["Carlos", "cualquiera2"])

console.log(estudiantes.get("tres"));