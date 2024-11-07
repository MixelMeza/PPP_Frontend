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

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'PracWay'
  },
  {
    path: 'modulos',
    component:ModulosComponent,
    title: 'PracWay'
  },

  {
    path: 'modulos/practicas',
    component:VistaCoordinadorComponent,
    title: 'PracWay',
    children: [
      {
        path: 'inicio',
        component:InicioComponent,
        title: 'PracWay'
      },
      {
        path: 'evaluaciones',
        component:EvaluacionesComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisores-academicos',
        component:SupervisoresAcademicosComponent,
        title: 'PracWay'
      },
      {
        path: 'supervisores-empresariales',
        component:SupervisoresEmpresarialesComponent,
        title: 'PracWay'
      },
      {
        path: 'documentos',
        component:DocumentosComponent,
        title: 'PracWay'
      },
      {
        path: 'periodo-ppp',
        component:PeriodoComponent,
        title: 'PracWay'
      },
      {
        path: 'informe-ppp',
        component:InformeComponent,
        title: 'PracWay'
      }
    ]
  }

];
