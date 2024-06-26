import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes:Heroe[]=[];

  constructor(private _heroesService:HeroesService, private router:Router){
        //console.log("constructor");
  }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();
    //console.log(this.heroes);

  }

  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
  
  }

}
