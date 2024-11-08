import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallePPP } from '../model/DetallePPP';

@Injectable({
  providedIn: 'root'
})
export class DetallePPPService {
  private apiUrl = 'http://localhost:8080/api/detalle_ppp'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getDetallesPPP(): Observable<DetallePPP[]> {
    return this.http.get<DetallePPP[]>(this.apiUrl);
  }

  getDetallePPPById(id: number): Observable<DetallePPP> {
    return this.http.get<DetallePPP>(`${this.apiUrl}/${id}`);
  }

  createDetallePPP(detallePPP: DetallePPP): Observable<DetallePPP> {
    return this.http.post<DetallePPP>(this.apiUrl, detallePPP);
  }

  updateDetallePPP(id: number, detallePPP: DetallePPP): Observable<DetallePPP> {
    return this.http.put<DetallePPP>(`${this.apiUrl}/${id}`, detallePPP);
  }

  deleteDetallePPP(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
