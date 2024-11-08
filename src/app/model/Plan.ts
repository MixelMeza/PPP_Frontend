export class Plan {
    id: number;
    plan: string;
    estado: string;

    constructor(id: number = 0, plan: string = '', estado: string = '') {
        this.id = id;
        this.plan = plan;
        this.estado = estado;
    }
}
