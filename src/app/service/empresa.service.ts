import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../model/Empresa';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    private apiURL = 'http://localhost:8080/api/empresas';

    constructor(private http: HttpClient) {}

    getEmpresas(): Observable<Empresa[]> {
        return this.http.get<Empresa[]>(this.apiURL);
    }

    getEmpresaById(id: number): Observable<Empresa> {
        return this.http.get<Empresa>(`${this.apiURL}/${id}`);
    }

    createEmpresa(empresa: Empresa): Observable<Empresa> {
        return this.http.post<Empresa>(this.apiURL, empresa);
    }

    deleteEmpresa(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    updateEmpresa(empresa: Empresa, id: number): Observable<Empresa> {
        return this.http.put<Empresa>(`${this.apiURL}/${id}`, empresa);
    }
}
