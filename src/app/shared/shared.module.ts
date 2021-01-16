import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TipoCanchaPipe} from './pipes/tipo-cancha.pipe';

@NgModule({
  declarations: [
    TipoCanchaPipe
  ],
  exports: [
    TipoCanchaPipe
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule {
}
