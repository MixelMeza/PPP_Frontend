import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanCarrera } from '../model/PlanCarrera';

@Injectable({
  providedIn: 'root'
})
export class PlanCarreraService {
  private apiUrl = 'http://localhost:8080/api/plan_carrera'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getPlanCarreras(): Observable<PlanCarrera[]> {
    return this.http.get<PlanCarrera[]>(this.apiUrl);
  }

  getPlanCarreraById(id: number): Observable<PlanCarrera> {
    return this.http.get<PlanCarrera>(`${this.apiUrl}/${id}`);
  }

  createPlanCarrera(planCarrera: PlanCarrera): Observable<PlanCarrera> {
    return this.http.post<PlanCarrera>(this.apiUrl, planCarrera);
  }

  updatePlanCarrera(id: number, planCarrera: PlanCarrera): Observable<PlanCarrera> {
    return this.http.put<PlanCarrera>(`${this.apiUrl}/${id}`, planCarrera);
  }

  deletePlanCarrera(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
