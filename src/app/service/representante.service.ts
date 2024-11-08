import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Representante } from '../model/Representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  private apiUrl = 'http://localhost:8080/api/representantes'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getRepresentantes(): Observable<Representante[]> {
    return this.http.get<Representante[]>(this.apiUrl);
  }

  getRepresentanteById(id: number): Observable<Representante> {
    return this.http.get<Representante>(`${this.apiUrl}/${id}`);
  }

  createRepresentante(representante: Representante): Observable<Representante> {
    return this.http.post<Representante>(this.apiUrl, representante);
  }

  updateRepresentante(id: number, representante: Representante): Observable<Representante> {
    return this.http.put<Representante>(`${this.apiUrl}/${id}`, representante);
  }

  deleteRepresentante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
