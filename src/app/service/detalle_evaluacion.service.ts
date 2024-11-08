import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleEvaluacion } from '../model/DetalleEvaluacion';

@Injectable({
  providedIn: 'root'
})
export class DetalleEvaluacionService {
  private apiUrl = 'http://localhost:8080/api/detalle_evaluacion'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getDetallesEvaluacion(): Observable<DetalleEvaluacion[]> {
    return this.http.get<DetalleEvaluacion[]>(this.apiUrl);
  }

  getDetalleEvaluacionById(id: number): Observable<DetalleEvaluacion> {
    return this.http.get<DetalleEvaluacion>(`${this.apiUrl}/${id}`);
  }

  createDetalleEvaluacion(detalleEvaluacion: DetalleEvaluacion): Observable<DetalleEvaluacion> {
    return this.http.post<DetalleEvaluacion>(this.apiUrl, detalleEvaluacion);
  }

  updateDetalleEvaluacion(id: number, detalleEvaluacion: DetalleEvaluacion): Observable<DetalleEvaluacion> {
    return this.http.put<DetalleEvaluacion>(`${this.apiUrl}/${id}`, detalleEvaluacion);
  }

  deleteDetalleEvaluacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
