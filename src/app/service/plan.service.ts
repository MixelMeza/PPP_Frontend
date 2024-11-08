import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../model/Plan';

@Injectable({
    providedIn: 'root'
})
export class PlanService {
    private apiURL = 'http://localhost:8080/api/planes';

    constructor(private http: HttpClient) {}

    getPlans(): Observable<Plan[]> {
        return this.http.get<Plan[]>(this.apiURL);
    }

    getPlanById(id: number): Observable<Plan> {
        return this.http.get<Plan>(`${this.apiURL}/${id}`);
    }

    createPlan(plan: Plan): Observable<Plan> {
        return this.http.post<Plan>(this.apiURL, plan);
    }

    deletePlan(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updatePlan(plan: Plan, id: number): Observable<Plan> {
        return this.http.put<Plan>(`${this.apiURL}/${id}`, plan);
    }
}
