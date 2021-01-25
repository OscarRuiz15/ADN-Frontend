import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarCanchaComponent} from './agregar-cancha/agregar-cancha.component';
import {ListarCanchasComponent} from './listar-canchas/listar-canchas.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    AgregarCanchaComponent,
    ListarCanchasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AgregarCanchaComponent,
    ListarCanchasComponent
  ]
})

export class CanchaModule {
}
