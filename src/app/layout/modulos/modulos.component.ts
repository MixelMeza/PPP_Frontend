import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent implements OnInit {
  usuario: Usuario | null = new Usuario();


  profile = {
    name: 'Juan',
    middleName: 'Sebastian',
    lastName: 'Espiritu',
    profilePicture: 'https://canon-creators.com/assets/img/avatars/avatar.png'
  };
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioFromLocalStorage();
    this.modules;
  }
  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }
  modules = [
    { title: 'VALIDAR SOLICITUDES', class: 'background-validar-solicitud', route: '/modulos/solicitudes' },
    { title: 'PPP', class: 'background-ppp' , route: '/modulos/practicas'},
    { title: 'INSERCIÓN', class: 'background-insercion', route: '/modulos/insercion' },
    { title: 'PROYECCIÓN SOCIAL', class: 'background-proyeccion-social', route: '/modulos/proyeccion-social' },
    { title: 'GENERAR REPORTE (MC)', class: 'background-reportes', route: '/modulos/reportes' },
    { title: 'CONFIGURACIÓN', class: 'background-configuracion', route: '/modulos/configuracion'  },
    { title: 'SOLICITAR PRÁCTICAS', class: 'background-solicitar-practicas', route: '/modulos/mis-solicitudes'  },
    { title: 'MIS PPP', class: 'background-mis-ppp', route: '/modulos/mis-practicas' }

  ];




}
