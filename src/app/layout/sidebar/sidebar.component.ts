import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = [
    { label: 'Inicio', icon: 'fas fa-home' },
    { label: 'Validar Solicitud', icon: 'fas fa-clipboard-check', route:'/validar-solicitud' },
    { label: 'Supervisiones', icon: 'fas fa-clipboard-list' },
    { label: 'Evaluaciones', icon: 'fas fa-edit' },
    { label: 'Supervisores Académicos', icon: 'fas fa-user' },
    { label: 'Supervisores Empresariales', icon: 'fas fa-user-tie' },
    { label: 'Documentos', icon: 'fas fa-file-alt' },
    { label: 'Inicio y Fin de PPP', icon: 'fas fa-calendar-alt' },
    { label: 'Informe PPP', icon: 'fas fa-file-invoice' }
  ];
}
