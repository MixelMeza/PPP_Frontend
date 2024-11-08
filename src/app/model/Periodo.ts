export class Periodo {
    id: number;
    fechaInicio: Date;
    fechaFin: Date;
    horaInicio: string; // Usando string para almacenar LocalTime
    horaFin: string;    // Usando string para almacenar LocalTime
    estado: string;

    constructor(
        id: number = 0,
        fechaInicio: Date = new Date(),
        fechaFin: Date = new Date(),
        horaInicio: string = '',
        horaFin: string = '',
        estado: string = ''
    ) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.estado = estado;
    }
}
