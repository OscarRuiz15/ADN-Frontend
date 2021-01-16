import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FeatureModule} from './feature/feature.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './core/loader/loader.component';
import {LoaderInterceptorService} from './core/loader/loader-interceptor.service';

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
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }]
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LoaderComponent
  ]
})

export class AppModule {
}
