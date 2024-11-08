import { DetallePPP } from "./DetallePPP";

export class DetalleDoc {
    id: number;
    nombre: string;
    url: string;
    fechaLim: Date;
    plantilla: string;
    estado: string;
    detallePPP?: DetallePPP; // ID de la relación con DetallePPP
  
    constructor(
      id: number = 0,
      nombre: string = '',
      url: string = '',
      fechaLim: Date = new Date(),
      plantilla: string = '',
      estado: string = '',
      detallePPP?: DetallePPP
    ) {
      this.id = id;
      this.nombre = nombre;
      this.url = url;
      this.fechaLim = fechaLim;
      this.plantilla = plantilla;
      this.estado = estado;
      this.detallePPP = detallePPP;
    }
  }
  