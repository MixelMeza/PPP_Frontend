import { PlanCarrera } from "../model/PlanCarrera";
import { Tipo } from "../model/Tipo";

export class DetalleEvaluacion {
    id: number;
    porcentaje: number;
    estado: string;
    tipo?: Tipo; // ID de la relación con Tipo
    planCarrera?: PlanCarrera; // ID de la relación con PlanCarrera
  
    constructor(
      id: number = 0,
      porcentaje: number = 0,
      estado: string = '',
      tipo?: Tipo,
      planCarrera?: PlanCarrera
    ) {
      this.id = id;
      this.porcentaje = porcentaje;
      this.estado = estado;
      this.tipo = tipo;
      this.planCarrera = planCarrera;
    }
  }
  