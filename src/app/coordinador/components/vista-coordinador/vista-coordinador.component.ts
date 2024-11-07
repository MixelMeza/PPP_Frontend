import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vista-coordinador',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,RouterOutlet],
  templateUrl: './vista-coordinador.component.html',
  styleUrl: './vista-coordinador.component.css'
})
export class VistaCoordinadorComponent {

}
