export class Proceso {
    id: number;
    nombre: string;
    tipo: string;
    estado: string;

    constructor(id: number = 0, nombre: string = '', tipo: string = '', estado: string = '') {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
}
