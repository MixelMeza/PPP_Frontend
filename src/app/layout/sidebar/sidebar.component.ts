import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { TooltipModule } from 'primeng/tooltip';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PanelMenuModule,TooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  modulo: string | undefined = '';
  sidebarItems: SidebarItem[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
    this.modulo = this.getModuloFromUrl();
    this.cargarContenidoSidebar();
    console.log(this.sidebarItems);
  }

  // Método para extraer el módulo desde la URL actual
  private getModuloFromUrl(): string | undefined {
    const url = this.router.url.split('/');
    return url.length > 2 ? url[2] : undefined; // Ajusta el índice según tu estructura de rutas
  }
  cargarContenidoSidebar(): void {
      //===============================================================================================================
      // Modulos Coordinador
    if (this.modulo === 'practicas') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/practicas/inicio' },
        { label: 'Evaluaciones', icon: 'fas fa-edit', route: '/modulos/practicas/evaluaciones' },
        { label: 'Supervisores Académicos', icon: 'fas fa-user', route: '/modulos/practicas/supervisores-academicos' },
        { label: 'Supervisores Empresariales', icon: 'fas fa-user-tie', route: '/modulos/practicas/supervisores-empresariales' },
        { label: 'Documentos', icon: 'fas fa-file-alt', route: '/modulos/practicas/documentos' },
        { label: 'Periodo de PPP', icon: 'fas fa-calendar-alt', route: '/modulos/practicas/periodo-ppp' },
        { label: 'Informe PPP', icon: 'fas fa-file-invoice', route: '/modulos/practicas/informe-ppp' }
      ];
    } else if (this.modulo === 'solicitudes') {
      this.sidebarItems = [
        { label: 'inicio', icon: 'fas fa-home', route: '/modulos/solicitudes/inicio' },
        { label: 'Validar Solicitudes', icon: 'icon-svg', route: '/modulos/solicitudes/validar-solicitudes' }
      ];
    } else if (this.modulo === 'insercion') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/insercion/inicio' },
        { label: 'Estudiante', icon: 'fas fa-user-graduate', route: '/modulos/insercion/estudiante' },
        { label: 'PPP', icon: 'fas fa-clipboard-list', route: '/modulos/insercion/ppp' },
        { label: 'Supervisor Académico', icon: 'fas fa-chalkboard-teacher', route: '/modulos/insercion/supervisor-academico' },
        { label: 'Supervisor Empresarial', icon: 'fas fa-user-tie', route: '/modulos/insercion/supervisor-empresarial' },
        { label: 'Empresa', icon: 'fas fa-building', route: '/modulos/insercion/empresa' },
        { label: 'Representante', icon: 'fas fa-id-badge', route: '/modulos/insercion/representante' },
        { label: 'Tipo', icon: 'fas fa-tags', route: '/modulos/insercion/tipo' }
      ];
    }else if (this.modulo === 'proyeccion-social') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/proyeccion-social/inicio' },
        { label: 'Horas de Proyeccion Social  ', icon: 'fas fa-clipboard-list', route: '/modulos/proyeccion-social/horas-ps' }
      ];
    }else if (this.modulo === 'reportes') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/reportes/inicio' },
        { label: 'Reporte', icon: 'fas fa-user-graduate', route: '/modulos/reportes/reporte1' }
      ];
    }
    else if (this.modulo === 'configuracion') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/reportes/inicio' },
        { label: 'Cambiar Contraseña', icon: 'fas fa-user-graduate', route: '/modulos/configuracion/cambiar-contraseña' },
        { label: 'Informacion de Cuenta', icon: 'fas fa-user-graduate', route: '/modulos/configuracion/informacion' },
      ];
    }
     //===============================================================================================================
    // Modulos Estudiante
    else if (this.modulo === 'mis-solicitudes') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/mis-solicitudes/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/mis-solicitudes/solicitudes' }
      ];
    }
    else if (this.modulo === 'mis-practicas') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/mis-practicas/inicio' },
        { label: 'Mis PPP', icon: 'fas fa-user-graduate', route: '/modulos/mis-practicas/practicas' }
      ];
    }
      //===============================================================================================================
    // Modulos Secretaria
    else if (this.modulo === 'solicitud') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }
    else if (this.modulo === 'mis-practicas') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }
      //===============================================================================================================
     // Modulos Supervisor
     else if (this.modulo === 'solicitud') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }
    else if (this.modulo === 'mis-practicas') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }
      //===============================================================================================================
     // Modulos DirectoraVCM
     else if (this.modulo === 'solicitud') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }
    else if (this.modulo === 'mis-practicas') {
      this.sidebarItems = [
        { label: 'Inicio', icon: 'fas fa-home', route: '/modulos/solicitud/inicio' },
        { label: 'Solicitar Registro de Practicas', icon: 'fas fa-user-graduate', route: '/modulos/solicitud/' }
      ];
    }

    // Puedes agregar más configuraciones para otros módulos
  }
}
