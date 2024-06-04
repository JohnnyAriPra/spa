import { Component } from '@angular/core';
import { HeroesService, Ruta } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  rutas:Ruta[]=[];

  constructor(private _heroesService:HeroesService, private router:Router){
    //console.log("constructor");
}

ngOnInit(): void {
this.rutas=this._heroesService.getRutas();

//console.log(this.heroes);

}

verRuta(idx:number){
  this.router.navigate( ['/ruta', idx] );

}

}

