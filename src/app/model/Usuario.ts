import { Persona } from "./Persona";

export class Usuario{
  id:number;
  usuario:string;
  contrasenia:string;
  icono:string;
  persona?:Persona;
  constructor(id:number=0 , usuario:string='', contrasenia:string='',icono:string='',persona?:Persona){
this.id=id,
this.usuario=usuario,
this.contrasenia=contrasenia,
this.icono=icono,
this.persona=persona
  }
}
