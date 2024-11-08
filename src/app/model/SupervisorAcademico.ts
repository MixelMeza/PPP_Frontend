import { Linea } from "./Linea";
import { Persona } from "./Persona";

export class SupervisorAcademico {
    id: number;
    estado: string;
    linea?: Linea; // ID de la relación con Linea
    persona?: Persona; // ID de la relación con Persona
  
    constructor(
      id: number = 0,
      estado: string = '',
      linea?: Linea,
      persona?: Persona
    ) {
      this.id = id;
      this.estado = estado;
      this.linea = linea;
      this.persona = persona;
    }
  }
  