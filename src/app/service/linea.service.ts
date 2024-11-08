import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linea } from '../model/Linea';

@Injectable({
    providedIn: 'root'
})
export class LineaService {
    private apiURL = 'http://localhost:8080/api/lineas';

    constructor(private http: HttpClient) {}

    getLineas(): Observable<Linea[]> {
        return this.http.get<Linea[]>(this.apiURL);
    }

    getLineaById(id: number): Observable<Linea> {
        return this.http.get<Linea>(`${this.apiURL}/${id}`);
    }

    createLinea(linea: Linea): Observable<Linea> {
        return this.http.post<Linea>(this.apiURL, linea);
    }

    deleteLinea(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateLinea(linea: Linea, id: number): Observable<Linea> {
        return this.http.put<Linea>(`${this.apiURL}/${id}`, linea);
    }
}
