import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {AppRoutingModule} from '../app-routing.module';
import {LoaderComponent} from './loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InicioComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent
  ]
})
export class CoreModule {
}
