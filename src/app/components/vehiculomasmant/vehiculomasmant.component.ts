import { Component } from '@angular/core';
import { HeroesService, Vehiculo } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculomasmant',
  templateUrl: './vehiculomasmant.component.html',
  styleUrl: './vehiculomasmant.component.css'
})
export class VehiculomasmantComponent {

  vehiculos:Vehiculo[]=[];

  constructor(private _heroesService:HeroesService, private router:Router){
        //console.log("constructor");
  }

  ngOnInit(): void {
    this.vehiculos=this._heroesService.getVehiculos();
    //console.log(this.heroes);

  }
}
