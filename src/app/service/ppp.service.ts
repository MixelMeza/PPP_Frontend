import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PPP } from '../model/PPP';

@Injectable({
  providedIn: 'root'
})
export class PPPService {
  private apiUrl = 'http://localhost:8080/api/ppp'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getPPPs(): Observable<PPP[]> {
    return this.http.get<PPP[]>(this.apiUrl);
  }

  getPPPById(id: number): Observable<PPP> {
    return this.http.get<PPP>(`${this.apiUrl}/${id}`);
  }

  createPPP(ppp: PPP): Observable<PPP> {
    return this.http.post<PPP>(this.apiUrl, ppp);
  }

  updatePPP(id: number, ppp: PPP): Observable<PPP> {
    return this.http.put<PPP>(`${this.apiUrl}/${id}`, ppp);
  }

  deletePPP(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
