import { Proceso } from "./Proceso";
import { Requisito } from "./Requisito";

export class ProcesoRequisito {
    id: number;
    estado: string;
    requisito?: Requisito; // ID de la relación con Requisito
    proceso?: Proceso; // ID de la relación con Proceso
  
    constructor(
      id: number = 0,
      estado: string = '',
      requisito?: Requisito,
      proceso?: Proceso
    ) {
      this.id = id;
      this.estado = estado;
      this.requisito = requisito;
      this.proceso = proceso;
    }
  }
  