import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluacion } from '../model/Evaluacion';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  private apiUrl = 'http://localhost:8080/api/evaluaciones'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getEvaluaciones(): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(this.apiUrl);
  }

  getEvaluacionById(id: number): Observable<Evaluacion> {
    return this.http.get<Evaluacion>(`${this.apiUrl}/${id}`);
  }

  createEvaluacion(evaluacion: Evaluacion): Observable<Evaluacion> {
    return this.http.post<Evaluacion>(this.apiUrl, evaluacion);
  }

  updateEvaluacion(id: number, evaluacion: Evaluacion): Observable<Evaluacion> {
    return this.http.put<Evaluacion>(`${this.apiUrl}/${id}`, evaluacion);
  }

  deleteEvaluacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
