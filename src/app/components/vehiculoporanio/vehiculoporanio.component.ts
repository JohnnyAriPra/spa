import { Component } from '@angular/core';
import { HeroesService, Vehiculo } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculoporanio',
  templateUrl: './vehiculoporanio.component.html',
  styleUrl: './vehiculoporanio.component.css'
})
export class VehiculoporanioComponent {
  vehiculos:Vehiculo[]=[];

  constructor(private _heroesService:HeroesService, private router:Router){
        //console.log("constructor");
  }

  ngOnInit(): void {
    this.vehiculos=this._heroesService.ordenar();

    //console.log(this.heroes);

  }

}
