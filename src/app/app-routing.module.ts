import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {TodosvehiculosComponent} from './components/todosvehiculos/todosvehiculos.component';
import {VehiculomasmantComponent} from './components/vehiculomasmant/vehiculomasmant.component';
import { VehiculoporanioComponent } from './components/vehiculoporanio/vehiculoporanio.component';
import { MarcamaspopularComponent } from './components/marcamaspopular/marcamaspopular.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { authGuard } from './guards/auth.guard';
import { RutasComponent } from './components/rutas/rutas.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { ExternoComponent } from './components/externo/externo.component';
import { InternoComponent } from './components/interno/interno.component';
import { TodasrutasComponent } from './components/todasrutas/todasrutas.component';





const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'heroe/:id', component:HeroeComponent},
  {path:'buscar/:termino', component:BuscadorComponent},
  {path:'todosvehiculos', component:TodosvehiculosComponent},
  {path:'vehiculomasmant', component:VehiculomasmantComponent},
  {path:'vehiculoporanio', component:VehiculoporanioComponent},
  {path:'marcamaspopular', component: MarcamaspopularComponent},
  {path:'protegida', component: ProtegidaComponent, canActivate: [authGuard]},
  {path: 'rutas', component: RutasComponent},
  {path:'quienessomos', component: QuienessomosComponent},
  {path:'ruta/:id', component: RutaComponent},
  {path:'externo', component: ExternoComponent},
  {path:'interno', component: InternoComponent},
  {path:'todasrutas', component: TodasrutasComponent},

  {path: '', pathMatch: 'full', redirectTo:'rutas'},
  {path: '**', pathMatch: 'full', redirectTo:'rutas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
