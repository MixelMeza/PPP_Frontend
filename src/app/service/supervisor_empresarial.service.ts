import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupervisorEmpresarial } from '../model/SupervisorEmpresarial';

@Injectable({
  providedIn: 'root'
})
export class SupervisorEmpresarialService {
  private apiUrl = 'http://localhost:8080/api/supervisor_empresarial'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getSupervisoresEmpresariales(): Observable<SupervisorEmpresarial[]> {
    return this.http.get<SupervisorEmpresarial[]>(this.apiUrl);
  }

  getSupervisorEmpresarialById(id: number): Observable<SupervisorEmpresarial> {
    return this.http.get<SupervisorEmpresarial>(`${this.apiUrl}/${id}`);
  }

  createSupervisorEmpresarial(supervisorEmpresarial: SupervisorEmpresarial): Observable<SupervisorEmpresarial> {
    return this.http.post<SupervisorEmpresarial>(this.apiUrl, supervisorEmpresarial);
  }

  updateSupervisorEmpresarial(id: number, supervisorEmpresarial: SupervisorEmpresarial): Observable<SupervisorEmpresarial> {
    return this.http.put<SupervisorEmpresarial>(`${this.apiUrl}/${id}`, supervisorEmpresarial);
  }

  deleteSupervisorEmpresarial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
