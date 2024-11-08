export class Requisito {
    id: number;
    n_orden: string;
    nombre: string;
    tipo: string;
    estado: string;

    constructor(
        id: number = 0,
        n_orden: string = '',
        nombre: string = '',
        tipo: string = '',
        estado: string = ''
    ) {
        this.id = id;
        this.n_orden = n_orden;
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
}
