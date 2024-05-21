import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit{

  vehiculos:any[]=[]
  termino: string="";
  
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino']

      this.vehiculos = this._heroesService.buscarVehiculos(params['termino']);
      console.log(this.vehiculos);
    })

  }

}
