import { DetalleDoc } from "./DetalleDoc";
import { Persona } from "./Persona";
import { PPP } from "./PPP";
import { Proceso } from "./Proceso";
import { Requisito } from "./Requisito";

export class DetallePPP {
    id: number;
    estado: string;
    ppp?: PPP; // ID de la relación con PPP
    requisito?: Requisito; // ID de la relación con Requisito
    proceso?: Proceso; // ID de la relación con Proceso
    persona?: Persona; // ID de la relación con Persona
  
    constructor(
      id: number = 0,
      estado: string = '',
      ppp?: PPP,
      requisito?: Requisito,
      proceso?: Proceso,
      persona?: Persona
    ) {
      this.id = id;
      this.estado = estado;
      this.ppp = ppp;
      this.requisito = requisito;
      this.proceso = proceso;
      this.persona = persona;
    }
  }
  