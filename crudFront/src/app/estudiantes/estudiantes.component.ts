import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from './estudiantes.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: any[] = [];
  estudianteActual: any = { nombre: '' }; // Almacena el estudiante que se está creando/editando
  isEditMode: boolean = false; // Determina si estamos en modo edición
  searchTerm: string = ''; // Parámetro de búsqueda
  filteredEstudiantes: any[] = []; // Lista de estudiantes filtrados

  constructor(private estudiantesService: EstudiantesService) {}

  ngOnInit(): void {
    this.obtenerEstudiantes(); // Carga los estudiantes al iniciar el componente
  }

  obtenerEstudiantes(): void {
    this.estudiantesService.getEstudiantes().subscribe(
      data => {
        this.estudiantes = data;
        this.filteredEstudiantes = data;
      },
      error => console.error('Error al obtener estudiantes', error)
    );
  }

  guardarEstudiante(): void {
    if (this.isEditMode) {
      this.estudiantesService.updateEstudiante(this.estudianteActual.id, this.estudianteActual).subscribe(
        () => this.postSaveOperations(),
        error => console.error('Error al actualizar estudiante', error)
      );
    } else {
      this.estudiantesService.createEstudiante(this.estudianteActual).subscribe(
        () => this.postSaveOperations(),
        error => console.error('Error al crear estudiante', error)
      );
    }
  }

  editarEstudiante(estudiante: any): void {
    this.estudianteActual = { ...estudiante }; // Clona el estudiante para evitar mutación directa
    this.isEditMode = true;
  }

  eliminarEstudiante(id: string): void {
    this.estudiantesService.deleteEstudiante(id).subscribe(
      () => {
        this.estudiantes = this.estudiantes.filter(e => e.id !== id);
        this.filteredEstudiantes = this.filteredEstudiantes.filter(e => e.id !== id);
      },
      error => console.error('Error al eliminar estudiante', error)
    );
  }

  resetForm(): void {
    this.estudianteActual = { nombre: '' }; // Resetea el formulario
    this.isEditMode = false;
  }

  postSaveOperations(): void {
    this.resetForm(); // Resetea el formulario después de guardar
    this.obtenerEstudiantes(); // Recarga la lista de estudiantes
  }

  filtrarEstudiantes(event?: KeyboardEvent): void {
    if (event && event.key === 'Enter') {
      this.filtrarEstudiantes();
    }
    this.filteredEstudiantes = this.estudiantes.filter(estudiante => {
      return (
        estudiante.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        estudiante.apellido.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        estudiante.edad.toString().includes(this.searchTerm) ||
        estudiante.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  limpiarFiltro(): void {
    this.searchTerm = '';
    this.filteredEstudiantes = this.estudiantes;
  }
}
