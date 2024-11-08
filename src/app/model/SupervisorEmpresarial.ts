import { Empresa } from "./Empresa";
import { Persona } from "./Persona";

export class SupervisorEmpresarial {
    id: number;
    codigo: string;
    ciclo: string;
    horasPpp: number;
    horasVcm: number;
    estado: string;
    persona?: Persona; // ID de la relación con Persona
    empresa?: Empresa; // ID de la relación con Empresa
  
    constructor(
      id: number = 0,
      codigo: string = '',
      ciclo: string = '',
      horasPpp: number = 0,
      horasVcm: number = 0,
      estado: string = '',
      persona?: Persona,
      empresa?: Empresa
    ) {
      this.id = id;
      this.codigo = codigo;
      this.ciclo = ciclo;
      this.horasPpp = horasPpp;
      this.horasVcm = horasVcm;
      this.estado = estado;
      this.persona = persona;
      this.empresa = empresa;
    }
  }
  