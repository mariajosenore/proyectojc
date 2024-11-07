import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { SilviaComponent } from './pages/silvia/silvia.component';
import { LugaresComponent } from './pages/lugares/lugares.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SilviaComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
