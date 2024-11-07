import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule,RouterModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent {
  profile = {
    name: 'Juan',
    middleName:'Sebastian',
    lastName:'Espiritu',
    profilePicture: 'https://storage.googleapis.com/a1aa/image/sjYzHVtevJQkA68jxgPHWM9fiT6bbKSfpeSvdfroCU3ZR8wdC.jpg'
  };

  modules = [
    { title: 'SOLICITAR PRÁCTICAS', class: 'background-solicitar-practicas'},
    { title: 'MIS PPP', class: 'background-mis-ppp',route:'/modulos/practicas' },
    { title: 'CONFIGURACIÓN',  class: 'background-configuracion'},

];


}
