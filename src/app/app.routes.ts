import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { ListaPacientes } from './features/pacientes/lista-pacientes/lista-pacientes';
import { Consultas } from './features/consultas/consultas/consultas';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'pacientes',
    component: ListaPacientes
  },
  {
    path: 'consultas',
    component: Consultas
  }

];
