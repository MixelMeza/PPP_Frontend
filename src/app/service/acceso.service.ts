import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acceso } from '../model/Acceso';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private apiUrl = 'http://localhost:8080/api/accesos'; // Ajusta esta URL según sea necesario

  constructor(private http: HttpClient) { }

  // Obtener todos los accesos
  getAccesos(): Observable<Acceso[]> {
    return this.http.get<Acceso[]>(this.apiUrl);
  }

  // Obtener un acceso por ID
  getAccesoById(id: number): Observable<Acceso> {
    return this.http.get<Acceso>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo acceso
  createAcceso(acceso: Acceso): Observable<Acceso> {
    return this.http.post<Acceso>(this.apiUrl, acceso);
  }

  // Actualizar un acceso existente
  updateAcceso(id: number, acceso: Acceso): Observable<Acceso> {
    return this.http.put<Acceso>(`${this.apiUrl}/${id}`, acceso);
  }

  // Eliminar un acceso
  deleteAcceso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}










