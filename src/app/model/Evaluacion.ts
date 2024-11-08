import { PPP } from "./PPP";
import { Tipo } from "./Tipo";

export class Evaluacion {
    id: number;
    fecha: Date;
    link: string;
    nota: number;
    comentario: string;
    estado: string;
    tipo?: Tipo; // ID de la relación con Tipo
    ppp?: PPP; // ID de la relación con PPP
  
    constructor(
      id: number = 0,
      fecha: Date = new Date(),
      link: string = '',
      nota: number = 0.0,
      comentario: string = '',
      estado: string = '',
      tipo?: Tipo,
      ppp?: PPP
    ) {
      this.id = id;
      this.fecha = fecha;
      this.link = link;
      this.nota = nota;
      this.comentario = comentario;
      this.estado = estado;
      this.tipo = tipo;
      this.ppp= ppp;
    }
  }
  