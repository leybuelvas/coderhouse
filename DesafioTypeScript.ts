
class Usuario {
    constructor(public nombre: string, public apellido: string, public libros: { nombre: string, autor: string }[], public mascotas: string[]) { }
    getFullName(): string {
        return this.nombre + " " + this.apellido;
    }
    addMascota(nombreMascota: string): void {
        this.mascotas.push(nombreMascota);
    }
    countMascotas(): number {
        return this.mascotas.length;
    }
    addLibro(titulo: string, autor: string): void {
        this.libros.push({
            nombre: titulo,
            autor: autor
        });
    }
    getBooksNames(): string[] {
        return this.libros.map(libro => libro.nombre);
    }
}
let usuario = new Usuario("Ley", "Buelvas", [
    {
        nombre: "El señor de los anillos",
        autor: "J.R.R. Tolkien"
    },
    {
        nombre: "El señor de los anillos 2",
        autor: "J.R.R. Tolkien"
    }
],
    ["Alaska", "Luna"]);
console.log(usuario.getFullName());
console.log(usuario.addMascota);
console.log(usuario.countMascotas());
console.log(usuario.addLibro);
console.log(usuario.getBooksNames());
