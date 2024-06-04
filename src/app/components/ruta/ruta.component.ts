import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrl: './ruta.component.css'
})
export class RutaComponent {

  ruta:any={};

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta= this._heroesService.getRuta(params ['id']);
    });
  }


}
