import { Empresa } from "./Empresa";
import { Persona } from "./Persona";

export class Representante {
    id: number;
    cargo: string;
    estado: string;
    persona?: Persona; // ID de la relación con Persona
    empresa?: Empresa; // ID de la relación con Empresa
  
    constructor(
      id: number = 0,
      cargo: string = '',
      estado: string = '',
      persona?: Persona,
      empresa?: Empresa
    ) {
      this.id = id;
      this.cargo = cargo;
      this.estado = estado;
      this.persona = persona;
      this.empresa = empresa;
    }
  }
  