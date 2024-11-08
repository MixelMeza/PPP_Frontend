import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../model/Rol';

@Injectable({
    providedIn: 'root'
})
export class RolService {
    private apiURL = 'http://localhost:8080/api/roles';

    constructor(private http: HttpClient) {}

    getRoles(): Observable<Rol[]> {
        return this.http.get<Rol[]>(this.apiURL);
    }

    getRolById(id: number): Observable<Rol> {
        return this.http.get<Rol>(`${this.apiURL}/${id}`);
    }

    createRol(rol: Rol): Observable<Rol> {
        return this.http.post<Rol>(this.apiURL, rol);
    }

    deleteRol(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateRol(rol: Rol, id: number): Observable<Rol> {
        return this.http.put<Rol>(`${this.apiURL}/${id}`, rol);
    }
}
