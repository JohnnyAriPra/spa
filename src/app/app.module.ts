import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';

//SERVICIOS
import { HeroesService } from './services/heroes.service';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TodosvehiculosComponent } from './components/todosvehiculos/todosvehiculos.component';
import { VehiculomasmantComponent } from './components/vehiculomasmant/vehiculomasmant.component';
import { VehiculoporanioComponent } from './components/vehiculoporanio/vehiculoporanio.component';
import { MarcamaspopularComponent } from './components/marcamaspopular/marcamaspopular.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent,
    BuscadorComponent,
    TodosvehiculosComponent,
    VehiculomasmantComponent,
    VehiculoporanioComponent,
    MarcamaspopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
