import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ModulosComponent } from './layout/modulos/modulos.component';
import { VistaCoordinadorComponent } from './coordinador/components/vista-coordinador/vista-coordinador.component';

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    title: 'PracWay'
  },
  {
    path:'modulos',
    component:ModulosComponent,
    title: 'PracWay'
  },
  {
    path:'ppp',
    component:VistaCoordinadorComponent,
    title: 'PracWay'
  }
];
