import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';
  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Método para autenticar al usuario (login)
  autenticar(usuario: string, contrasenia: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { usuario, contrasenia }).pipe(
      tap((user: Usuario) => {
        this.usuarioSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }
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



    logout(): void {
      // Limpia el usuario del BehaviorSubject y del localStorage
      this.usuarioSubject.next(null);
      localStorage.removeItem('currentUser');
    }

    getUsuarioFromLocalStorage(): Usuario | null {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) as Usuario : null;
    }
  }

