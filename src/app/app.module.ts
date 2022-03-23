import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { HabilidadesComponent } from './components/pages/habilidades/habilidades.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { ExperienciaComponent } from './components/pages/experiencia/experiencia.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HabilidadesComponent,
    ServiciosComponent,
    ExperienciaComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
