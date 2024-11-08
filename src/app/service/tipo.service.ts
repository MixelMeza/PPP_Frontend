import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo } from '../model/Tipo';

@Injectable({
    providedIn: 'root'
})
export class TipoService {
    private apiURL = 'http://localhost:8080/api/tipos';

    constructor(private http: HttpClient) {}

    getTipos(): Observable<Tipo[]> {
        return this.http.get<Tipo[]>(this.apiURL);
    }

    getTipoById(id: number): Observable<Tipo> {
        return this.http.get<Tipo>(`${this.apiURL}/${id}`);
    }

    createTipo(tipo: Tipo): Observable<Tipo> {
        return this.http.post<Tipo>(this.apiURL, tipo);
    }

    deleteTipo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateTipo(tipo: Tipo, id: number): Observable<Tipo> {
        return this.http.put<Tipo>(`${this.apiURL}/${id}`, tipo);
    }
}
