import { Empresa } from "./Empresa";
import { Linea } from "./Linea";
import { Periodo } from "./Periodo";
import { PlanCarrera } from "./PlanCarrera";
import { SolicitudPPP } from "./SolicitudPPP";
import { SupervisorAcademico } from "./SupervisorAcademico";
import { SupervisorEmpresarial } from "./SupervisorEmpresarial";

export class PPP {
    id: number;
    horas: number;
    promedio: number;
    estado: string;
    periodo?: Periodo; // ID de la relación con Periodo
    estudiante?: Estudiante; // ID de la relación con Estudiante
    supervisorEmpresarial?: SupervisorEmpresarial; // ID de la relación con Supervisor Empresarial
    supervisorAcademico?: SupervisorAcademico; // ID de la relación con Supervisor Académico
    linea?: Linea; // ID de la relación con Linea
    planCarrera?: PlanCarrera; // ID de la relación con Plan Carrera
    empresa?: Empresa; // ID de la relación con Empresa
    solicitudPPP?: SolicitudPPP; // ID de la relación con Solicitud PPP
  
    constructor(
      id: number = 0,
      horas: number = 0,
      promedio: number = 0.0,
      estado: string = '',
      periodo?: Periodo,
      estudiante?: Estudiante,
      supervisorEmpresarial?: SupervisorEmpresarial,
      supervisorAcademico?: SupervisorAcademico,
      linea?: Linea,
      planCarrera?: PlanCarrera,
      empresa?: Empresa,
      solicitudPPP?: SolicitudPPP
    ) {
      this.id = id;
      this.horas = horas;
      this.promedio = promedio;
      this.estado = estado;
      this.periodo = periodo;
      this.estudiante = estudiante;
      this.supervisorEmpresarial = supervisorEmpresarial;
      this.supervisorAcademico= supervisorAcademico;
      this.linea = linea;
      this.planCarrera = planCarrera;
      this.empresa = empresa;
      this.solicitudPPP = solicitudPPP;
    }
  }
  