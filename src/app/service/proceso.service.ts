import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proceso } from '../model/Proceso';

@Injectable({
    providedIn: 'root'
})
export class ProcesoService {
    private apiURL = 'http://localhost:8080/api/procesos';

    constructor(private http: HttpClient) {}

    getProcesos(): Observable<Proceso[]> {
        return this.http.get<Proceso[]>(this.apiURL);
    }

    getProcesoById(id: number): Observable<Proceso> {
        return this.http.get<Proceso>(`${this.apiURL}/${id}`);
    }

    createProceso(proceso: Proceso): Observable<Proceso> {
        return this.http.post<Proceso>(this.apiURL, proceso);
    }

    deleteProceso(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateProceso(proceso: Proceso, id: number): Observable<Proceso> {
        return this.http.put<Proceso>(`${this.apiURL}/${id}`, proceso);
    }
}
