import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth: AuthService, private router:Router){ }
  ngOnInit(): void{
    this.auth.isAuthenticated$.subscribe(isAthenticated => {
      if(isAthenticated){
        this.router.navigate(['/todosvehiculos']);
      }
    })    
  }

  buscarVehiculo(termino:string){
    console.log(termino);
    this.router.navigate(['/buscar', termino]);

  }

   login(){
    this.auth.loginWithRedirect()
  }
   logout(){
    this.auth.logout();
  }

}
