import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCanchaComponent } from './agregar-cancha/agregar-cancha.component';
import { ListarCanchasComponent } from './listar-canchas/listar-canchas.component';

const appRoutes: Routes = [
  {
    path: 'canchas',
    children: [
      { path: 'listar', component: ListarCanchasComponent },
      { path: 'agregar', component: AgregarCanchaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class CanchaRoutingModule {}
