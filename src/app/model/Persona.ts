export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    dni: string;
    estado: string;  

    constructor(
        id: number = 0,
        nombre: string = '',
        apellido: string = '',
        correo: string = '',
        telefono: string = '',
        dni: string = '',
        estado: string = '',
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.dni = dni;
        this.estado = estado;
    }
}
