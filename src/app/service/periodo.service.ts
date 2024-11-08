import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodo } from '../model/Periodo';

@Injectable({
    providedIn: 'root'
})
export class PeriodoService {
    private apiURL = 'http://localhost:8080/api/periodos';

    constructor(private http: HttpClient) {}

    getPeriodos(): Observable<Periodo[]> {
        return this.http.get<Periodo[]>(this.apiURL);
    }

    getPeriodoById(id: number): Observable<Periodo> {
        return this.http.get<Periodo>(`${this.apiURL}/${id}`);
    }

    createPeriodo(periodo: Periodo): Observable<Periodo> {
        return this.http.post<Periodo>(this.apiURL, periodo);
    }

    deletePeriodo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updatePeriodo(periodo: Periodo, id: number): Observable<Periodo> {
        return this.http.put<Periodo>(`${this.apiURL}/${id}`, periodo);
    }
}
