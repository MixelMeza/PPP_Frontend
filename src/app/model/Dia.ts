export class Dia {
    id: number;
    nombre: string;
    trabajado: boolean;
    estado: string;
  
    constructor(
      id: number = 0,
      nombre: string = '',
      trabajado: boolean = false,
      estado: string = '',
    ) {
      this.id = id;
      this.nombre = nombre;
      this.trabajado = trabajado;
      this.estado = estado;
    }
  }
