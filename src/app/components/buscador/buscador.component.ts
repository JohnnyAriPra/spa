import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Ruta} from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit{

  rutas:any[]=[]
  termino: string="";
  
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,  private router:Router){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino']

      this.rutas = this._heroesService.buscarRutas(params['termino']);
      console.log(this.rutas);
    })

  }
  verRuta(idx:number){
    this.router.navigate( ['/ruta', idx] );
  
  }


}
