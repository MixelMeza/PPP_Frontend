import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleDoc } from '../model/DetalleDoc';

@Injectable({
  providedIn: 'root'
})
export class DetalleDocService {
  private apiUrl = 'http://localhost:8080/api/detalle_doc'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getDetallesDoc(): Observable<DetalleDoc[]> {
    return this.http.get<DetalleDoc[]>(this.apiUrl);
  }

  getDetalleDocById(id: number): Observable<DetalleDoc> {
    return this.http.get<DetalleDoc>(`${this.apiUrl}/${id}`);
  }

  createDetalleDoc(detalleDoc: DetalleDoc): Observable<DetalleDoc> {
    return this.http.post<DetalleDoc>(this.apiUrl, detalleDoc);
  }

  updateDetalleDoc(id: number, detalleDoc: DetalleDoc): Observable<DetalleDoc> {
    return this.http.put<DetalleDoc>(`${this.apiUrl}/${id}`, detalleDoc);
  }

  deleteDetalleDoc(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
