import { Periodo } from "./Periodo";

export class Horario {
    id: number;
    dia: string;
    horaInicio: string;
    horaFin: string;
    trabajado: boolean;
    periodo?: Periodo; // ID de la relación con Periodo
  
    constructor(
      id: number = 0,
      dia: string = '',
      horaInicio: string = '',
      horaFin: string = '',
      trabajado: boolean = false,
      periodo?: Periodo
    ) {
      this.id = id;
      this.dia = dia;
      this.horaInicio = horaInicio;
      this.horaFin = horaFin;
      this.trabajado = trabajado;
      this.periodo = periodo;
    }
  }
  