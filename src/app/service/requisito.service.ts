import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requisito } from '../model/Requisito';

@Injectable({
    providedIn: 'root'
})
export class RequisitoService {
    private apiURL = 'http://localhost:8080/api/requisitos';

    constructor(private http: HttpClient) {}

    getRequisitos(): Observable<Requisito[]> {
        return this.http.get<Requisito[]>(this.apiURL);
    }

    getRequisitoById(id: number): Observable<Requisito> {
        return this.http.get<Requisito>(`${this.apiURL}/${id}`);
    }

    createRequisito(requisito: Requisito): Observable<Requisito> {
        return this.http.post<Requisito>(this.apiURL, requisito);
    }

    deleteRequisito(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateRequisito(requisito: Requisito, id: number): Observable<Requisito> {
        return this.http.put<Requisito>(`${this.apiURL}/${id}`, requisito);
    }
}
