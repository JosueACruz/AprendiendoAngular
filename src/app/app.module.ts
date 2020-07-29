import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MiComponente } from './Components/mi-componente/mi-componente.components';
import { PeliculasComponent } from './components/peliculas/peliculas.component'; /*aqui estoy llamando la clase MiComponente*/

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent     /*para que el componente funcione lo tengo que meter dentro de declarations para poder usarlo*/
  ],                  //lo usare en app.component.html
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
