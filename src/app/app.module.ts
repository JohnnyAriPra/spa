import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//SERVICIOS
import { HeroesService } from './services/heroes.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { TodosvehiculosComponent } from './components/todosvehiculos/todosvehiculos.component';
import { VehiculomasmantComponent } from './components/vehiculomasmant/vehiculomasmant.component';
import { VehiculoporanioComponent } from './components/vehiculoporanio/vehiculoporanio.component';
import { MarcamaspopularComponent } from './components/marcamaspopular/marcamaspopular.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ProtegidaComponent } from './components/protegida/protegida.component';


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
    MarcamaspopularComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AuthModule.forRoot({domain: 'dev-1hzhcejuuwhb0ny6.us.auth0.com',
    clientId: 'zMPUTkHrQBcktfFOtCMXphIDo5440WFb', 
  authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
