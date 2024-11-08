export class SolicitudPPP {
    id: number;
    url: string;
    motivo: string;
    fecha: string;
    estado: string;
  
    constructor(
      id: number = 0,
      url: string = '',
      motivo: string = '',
      fecha: string = '',
      estado: string = ''
    ) {
      this.id = id;
      this.url = url;
      this.motivo = motivo;
      this.fecha = fecha;
      this.estado = estado;
    }
  }
  