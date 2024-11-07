import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = [
    { label: 'Inicio', icon: 'fas fa-home', route:'/modulos/practicas/inicio' },
    { label: 'Evaluaciones', icon: 'fas fa-edit', route:'/modulos/practicas/evaluaciones' },
    { label: 'Supervisores Académicos', icon: 'fas fa-user', route:'/modulos/practicas/supervisores-academicos' },
    { label: 'Supervisores Empresariales', icon: 'fas fa-user-tie', route:'/modulos/practicas/supervisores-empresariales' },
    { label: 'Documentos', icon: 'fas fa-file-alt', route:'/modulos/practicas/documentos' },
    { label: 'Periodo de PPP', icon: 'fas fa-calendar-alt', route:'/modulos/practicas/periodo-ppp' },
    { label: 'Informe PPP', icon: 'fas fa-file-invoice', route:'/modulos/practicas/informe-ppp' }
  ];
}
