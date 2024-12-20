import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/', 'home']);
  }
  goToAbout() {
    this.router.navigate(['/', 'about']);
  }
  goToSilvia() {
    this.router.navigate(['/', 'conoce_silvia']);
  }
  goToLugares() {
    this.router.navigate(['/', 'lugares_turisticos']);
  }
  goToRegister() {
    this.router.navigate(['/', 'registrarse']);
  }
}
