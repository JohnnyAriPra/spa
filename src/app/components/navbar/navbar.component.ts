import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private router:Router){ }
  ngOnInit(){

  }

  buscarVehiculo(termino:string){
    console.log(termino);
    this.router.navigate(['/buscar', termino]);

  }

}
