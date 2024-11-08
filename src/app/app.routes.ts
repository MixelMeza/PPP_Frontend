import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ModulosComponent } from './layout/modulos/modulos.component';
import { VistaCoordinadorComponent } from './coordinador/components/vista-coordinador/vista-coordinador.component';
import { InicioComponent } from './coordinador/components/inicio/inicio.component';
import { EvaluacionesComponent } from './coordinador/components/evaluaciones/evaluaciones.component';
import { SupervisoresAcademicosComponent } from './coordinador/components/supervisores-academicos/supervisores-academicos.component';
import { SupervisoresEmpresarialesComponent } from './coordinador/components/supervisores-empresariales/supervisores-empresariales.component';
import { DocumentosComponent } from './coordinador/components/documentos/documentos.component';
import { PeriodoComponent } from './coordinador/components/periodo/periodo.component';
import { InformeComponent } from './coordinador/components/informe/informe.component';
import { ValidarSolicitudesComponent } from './coordinador/components/validar-solicitudes/validar-solicitudes.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'PracWay'
  },
  {
    path: 'modulos',
    component: ModulosComponent,
    title: 'PracWay'
  },
// practicas-estudiantes-coordinador
  {
    path: 'modulos/practicas',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'evaluaciones',
        component: EvaluacionesComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisores-academicos',
        component: SupervisoresAcademicosComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisores-empresariales',
        component: SupervisoresEmpresarialesComponent,
        title: 'PracWay'
      },
      {
        path: 'documentos',
        component: DocumentosComponent,
        title: 'PracWay'
      },
      {
        path: 'periodo-ppp',
        component: PeriodoComponent,
        title: 'PracWay'
      },
      {
        path: 'informe-ppp',
        component: InformeComponent,
        title: 'PracWay'
      }
    ]
  },
  // solicitudes-estudiantes-coordinador
  {
    path: 'modulos/solicitudes',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'validar-solicitudes',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // insercion-de-datos-coordinador
  {
    path: 'modulos/insercion',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'empresa',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'representante',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'estudiante',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisor-academico',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisor-empresarial',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      },
      {
        path: 'tipo',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      },
      {
        path: 'ppp',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // proyeccion-social-coordinador
  {
    path: 'modulos/proyeccion-social',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'horas-ps',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // reportes-coordinador
  {
    path: 'modulos/reportes',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'reporte1',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // configuracion-global
  {
    path: 'modulos/configuracion',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'cambiar-contraseña',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      },
      {
        path: 'informacion',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // solicitudes-estudiante
  {
    path: 'modulos/mis-solicitudes',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'solicitudes',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  },
  // practicas-estudiante
  {
    path: 'modulos/mis-practicas',
    component: VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'practicas',
        component: ValidarSolicitudesComponent,
        title: 'PracWay'
      }
    ]
  }



];
