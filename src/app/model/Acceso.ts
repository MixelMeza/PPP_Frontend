    
export class Acceso {
    id: number;
    acceso: string;
    url: string;
    icono: string;
    estado: string;

    constructor(
        id: number = 0,
        acceso: string = '',
        url: string = '',
        icono: string = '',
        estado: string = '',
    ) {
        this.id = id;
        this.acceso = acceso;
        this.url = url;
        this.icono = icono;
        this.estado = estado;
    }
}
