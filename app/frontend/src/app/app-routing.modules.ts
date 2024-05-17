import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {WebrotaComponent} from "./webrota/webrota.component";
import { MapaComponent } from "./mapa/mapa.component";

const routes: Routes = [
  { path: 'home', component: LoginComponent},
  { path: 'webrota', component: WebrotaComponent},
  { path: 'maps', component: MapaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
