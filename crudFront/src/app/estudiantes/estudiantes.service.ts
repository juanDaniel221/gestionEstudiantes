import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private apiUrl = 'http://127.0.0.1:3000/estudiantes'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los estudiantes
  getEstudiantes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un estudiante por ID
  getEstudiante(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo estudiante
  createEstudiante(estudiante: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, estudiante);
  }

  // Actualizar un estudiante
  updateEstudiante(id: string, estudiante: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, estudiante);
  }

  // Eliminar un estudiante
  deleteEstudiante(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
