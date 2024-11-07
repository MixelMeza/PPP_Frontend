import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


    private apiUrl= 'http://localhost:8080/api/usuarios';
    constructor(private http:HttpClient) { }


    getUsuarios(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl);
    }

    getUsuarioById(id:number):Observable<Usuario>{
      return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
    }

    createUsuario(Usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.apiUrl, Usuario);
    }

    deleteUsuario(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    updateUsuario(Usuario:Usuario, id:number): Observable<Usuario>{
      return this.http.put<Usuario>(`${this.apiUrl}/${id}`, Usuario);
    }

  }

