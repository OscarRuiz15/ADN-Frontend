import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarCanchaComponent} from './agregar-cancha/agregar-cancha.component';
import {ListarCanchasComponent} from './listar-canchas/listar-canchas.component';

@NgModule({
  declarations: [
    AgregarCanchaComponent,
    ListarCanchasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarCanchaComponent,
    ListarCanchasComponent
  ]
})

export class CanchaModule {
}
