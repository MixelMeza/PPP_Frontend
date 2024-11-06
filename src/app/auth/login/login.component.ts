import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FloatLabelModule,FormsModule,ChipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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

}
