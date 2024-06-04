import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrl: './protegida.component.css'
})
export class ProtegidaComponent {
  constructor(public auth: AuthService){}

}
