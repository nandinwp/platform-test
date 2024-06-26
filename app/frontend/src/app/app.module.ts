import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { WebrotaComponent } from './webrota/webrota.component';
import { MapaComponent } from './mapa/mapa.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebrotaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
