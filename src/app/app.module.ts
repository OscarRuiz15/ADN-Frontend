import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FeatureModule} from './feature/feature.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
