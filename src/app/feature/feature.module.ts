import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteModule} from './cliente/cliente.module';
import {CanchaModule} from './cancha/cancha.module';
import {ReservaModule} from './reserva/reserva.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClienteModule,
    CanchaModule,
    ReservaModule,
  ]
})

export class FeatureModule {
}
