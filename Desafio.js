
class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        if (
            this.nombre === undefined ||
            this.apellido === undefined ||
            this.nombre === "" ||
            this.apellido === ""
        ) {
            return "No se ha definido el nombre o el apellido";
        }
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        return this.mascotas.push(nombreMascota);
    }

    getMascotas() {
        return this.mascotas
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addLibro(titulo, autor) {
        this.libros.push({
            titulo,
            autor,
        });
    }

    getBooksNames() {
        return this.libros.map((libro) => libro.titulo);
    }
}
let usuario = new Usuario(
    "Leyci",
    "Buelvas",
    [
        {
            titulo: "El señor de los anillos", 
            autor: "J.R.R. Tolkien",},{
            titulo: "El señor de los anillos 2",
            autor: "J.R.R. Tolkien",},{
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
        },
    ], 
    ["Alaska", "Nala", "Bella"]
);
console.log(usuario.getFullName());
console.log(usuario.getMascotas());
console.log(usuario.countMascotas());
console.log(usuario.getBooksNames());