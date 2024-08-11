import { provideRouter, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

export const routes: Routes = [
  {
    path: '',
    component: EstudiantesComponent,
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
export const appRoutingProviders = [
  provideRouter(routes)
];
