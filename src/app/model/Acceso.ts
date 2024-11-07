import { Rol } from '../model/Rol';

export class Acceso {
    id: number;
    acceso: string;
    url: string;
    icono: string;
    estado: string;
    roles: Rol[];

    constructor(
        id: number = 0,
        acceso: string = '',
        url: string = '',
        icono: string = '',
        estado: string = '',
        roles: Rol[] = []
    ) {
        this.id = id;
        this.acceso = acceso;
        this.url = url;
        this.icono = icono;
        this.estado = estado;
        this.roles = roles;
    }
}
