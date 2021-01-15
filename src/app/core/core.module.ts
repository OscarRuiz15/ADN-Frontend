import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule {
}
