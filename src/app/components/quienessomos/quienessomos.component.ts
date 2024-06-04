import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrl: './quienessomos.component.css'
})
export class QuienessomosComponent {
  constructor(public auth: AuthService){}


}
