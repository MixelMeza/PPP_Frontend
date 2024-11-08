import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcesoRequisito } from '../model/ProcesoRequisito';

@Injectable({
  providedIn: 'root'
})
export class ProcesoRequisitoService {
  private apiUrl = 'http://localhost:8080/api/proceso_requisito'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getProcesoRequisitos(): Observable<ProcesoRequisito[]> {
    return this.http.get<ProcesoRequisito[]>(this.apiUrl);
  }

  getProcesoRequisitoById(id: number): Observable<ProcesoRequisito> {
    return this.http.get<ProcesoRequisito>(`${this.apiUrl}/${id}`);
  }

  createProcesoRequisito(procesoRequisito: ProcesoRequisito): Observable<ProcesoRequisito> {
    return this.http.post<ProcesoRequisito>(this.apiUrl, procesoRequisito);
  }

  updateProcesoRequisito(id: number, procesoRequisito: ProcesoRequisito): Observable<ProcesoRequisito> {
    return this.http.put<ProcesoRequisito>(`${this.apiUrl}/${id}`, procesoRequisito);
  }

  deleteProcesoRequisito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
