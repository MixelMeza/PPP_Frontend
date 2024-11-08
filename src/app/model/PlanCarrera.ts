import { Carrera } from "./Carrera";
import { Plan } from "./Plan";

export class PlanCarrera {
    id: number;
    codigo: string;
    estado: string;
    plan?: Plan;
    carrera?: Carrera;
  
    constructor(
      id: number = 0,
      codigo: string = '',
      estado: string = '',
      plan?: Plan,
      carrera?: Carrera
    ) {
      this.id = id;
      this.codigo = codigo;
      this.estado = estado;
      this.plan= plan;
      this.carrera = carrera;
    }
  }
  