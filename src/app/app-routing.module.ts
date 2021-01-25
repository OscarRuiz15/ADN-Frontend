import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'canchas',
    loadChildren: () =>
      import('./feature/cancha/cancha.module').then((m) => m.CanchaModule),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./feature/cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'reservas',
    loadChildren: () =>
      import('./feature/reserva/reserva.module').then((m) => m.ReservaModule),
  },
  { path: 'inicio', component: InicioComponent, data: { titulo: 'Inicio' } },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
