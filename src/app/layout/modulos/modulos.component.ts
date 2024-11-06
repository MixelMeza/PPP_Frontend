import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent {
  profile = {
    name: 'Juan Sebastian Espiritu',
    profilePicture: 'https://storage.googleapis.com/a1aa/image/sjYzHVtevJQkA68jxgPHWM9fiT6bbKSfpeSvdfroCU3ZR8wdC.jpg'
  };

  modules = [
    { title: 'SOLICITAR PRÁCTICAS', imgUrl: 'https://storage.googleapis.com/a1aa/image/JHUVE6zcX54kN5OhWGfJpfP2YsRpeGWPK8OLFn2pf62oIewdC.jpg' },
    { title: 'MIS PPP', imgUrl: 'https://storage.googleapis.com/a1aa/image/UgMswAt1MoasCF8aimKu2fvvaLnVPDTUoc2gDcMcfJPNiHuTA.jpg' },
    { title: 'CONFIGURACIÓN', imgUrl: 'https://storage.googleapis.com/a1aa/image/MZU9GmuA8f3IbyshZxzYG2CASbgZvQU8r46ChI5x4eVOiHuTA.jpg' },
    // Añadir más módulos si es necesario
  ];
}
