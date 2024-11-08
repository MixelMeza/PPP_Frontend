import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupervisorAcademico } from '../model/SupervisorAcademico';


@Injectable({
  providedIn: 'root'
})
export class Supervisor_AcademicoService {
  private apiUrl = 'http://localhost:8080/api/supervisor_academicos'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getSupervisoresAcademicos(): Observable<SupervisorAcademico[]> {
    return this.http.get<SupervisorAcademico[]>(this.apiUrl);
  }

  getSupervisorAcademicoById(id: number): Observable<SupervisorAcademico> {
    return this.http.get<SupervisorAcademico>(`${this.apiUrl}/${id}`);
  }

  createSupervisorAcademico(supervisorAcademico: SupervisorAcademico): Observable<SupervisorAcademico> {
    return this.http.post<SupervisorAcademico>(this.apiUrl, supervisorAcademico);
  }

  updateSupervisorAcademico(id: number, supervisorAcademico: SupervisorAcademico): Observable<SupervisorAcademico> {
    return this.http.put<SupervisorAcademico>(`${this.apiUrl}/${id}`, supervisorAcademico);
  }

  deleteSupervisorAcademico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
