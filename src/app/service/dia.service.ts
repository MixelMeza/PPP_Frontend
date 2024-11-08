import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dia } from '../model/Dia';

@Injectable({
  providedIn: 'root'
})
export class DiaService {
  private apiUrl = 'http://localhost:8080/api/dia'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getDias(): Observable<Dia[]> {
    return this.http.get<Dia[]>(this.apiUrl);
  }

  getDiaById(id: number): Observable<Dia> {
    return this.http.get<Dia>(`${this.apiUrl}/${id}`);
  }

  createDia(dia: Dia): Observable<Dia> {
    return this.http.post<Dia>(this.apiUrl, dia);
  }

  updateDia(id: number, dia: Dia): Observable<Dia> {
    return this.http.put<Dia>(`${this.apiUrl}/${id}`, dia);
  }

  deleteDia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
