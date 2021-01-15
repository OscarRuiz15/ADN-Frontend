import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarReservaComponent} from './agregar-reserva/agregar-reserva.component';
import {ListarReservaComponent} from './listar-reserva/listar-reserva.component';

@NgModule({
  declarations: [
    AgregarReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarReservaComponent,
    ListarReservaComponent
  ]
})

export class ReservaModule {
}
