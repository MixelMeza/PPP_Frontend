export class Empresa {
    id: number;
    razonSocial: string;
    direccion: string;
    sector: string;
    convenio: boolean;
    estado: string;

    constructor(
        id: number = 0,
        razonSocial: string = '',
        direccion: string = '',
        sector: string = '',
        convenio: boolean = false,
        estado: string = ''
    ) {
        this.id = id;
        this.razonSocial = razonSocial;
        this.direccion = direccion;
        this.sector = sector;
        this.convenio = convenio;
        this.estado = estado;
    }
}
