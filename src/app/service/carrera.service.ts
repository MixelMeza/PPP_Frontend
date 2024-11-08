import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../model/Carrera';

@Injectable({
    providedIn: 'root'
})
export class CarreraService {
    private apiURL = 'http://localhost:8080/api/carreras';

    constructor(private http: HttpClient) {}

    getCarreras(): Observable<Carrera[]> {
        return this.http.get<Carrera[]>(this.apiURL);
    }

    getCarreraById(id: number): Observable<Carrera> {
        return this.http.get<Carrera>(`${this.apiURL}/${id}`);
    }

    createCarrera(carrera: Carrera): Observable<Carrera> {
        return this.http.post<Carrera>(this.apiURL, carrera);
    }

    deleteCarrera(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateCarrera(carrera: Carrera, id: number): Observable<Carrera> {
        return this.http.put<Carrera>(`${this.apiURL}/${id}`, carrera);
    }
}
