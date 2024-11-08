import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ChipModule } from 'primeng/chip';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FloatLabelModule,FormsModule,ChipModule,MessagesModule,ToastModule,FormsModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) {}

  modeSecundary:boolean= false;

  modeOn():void{
    this.modeSecundary= true;
  }
  modeOff():void{
  this.modeSecundary= false;
 }

 openWhatsApp() {
  window.open('https://wa.me/989059335', '_blank');
}

callPhone() {
  window.open('tel:989059335', '_blank');
}


login() {
  this.usuarioService.autenticar(this.usuario, this.contrasenia).subscribe({
    next: (user) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Login exitoso',
        detail: `Bienvenido, ${user.usuario}!`
      });
      setTimeout(() => {
        this.router.navigate(['/modulos']);
      }, 2000);
    },
    error: (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de autenticación',
        detail: 'Usuario o contraseña incorrectos'

      });
      console.log(error)
    }
  });
}
}
