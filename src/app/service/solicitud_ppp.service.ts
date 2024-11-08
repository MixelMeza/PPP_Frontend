import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudPPP } from '../model/SolicitudPPP';

@Injectable({
  providedIn: 'root'
})
export class SolicitudPPPService {
  private apiUrl = 'http://localhost:8080/api/solicitud_ppp'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getSolicitudesPPP(): Observable<SolicitudPPP[]> {
    return this.http.get<SolicitudPPP[]>(this.apiUrl);
  }

  getSolicitudPPPById(id: number): Observable<SolicitudPPP> {
    return this.http.get<SolicitudPPP>(`${this.apiUrl}/${id}`);
  }

  createSolicitudPPP(solicitudPPP: SolicitudPPP): Observable<SolicitudPPP> {
    return this.http.post<SolicitudPPP>(this.apiUrl, solicitudPPP);
  }

  updateSolicitudPPP(id: number, solicitudPPP: SolicitudPPP): Observable<SolicitudPPP> {
    return this.http.put<SolicitudPPP>(`${this.apiUrl}/${id}`, solicitudPPP);
  }

  deleteSolicitudPPP(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
