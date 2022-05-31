import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string = "vous êtes déconnecté."
  name: string;
  password: string;
  // je doit le déclarer car je l'utilise dans le template
  auth: AuthService;


  // j'ai aussi une instance de authService a déclarer
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // je suis obliger de le restocker ici pour une utilisation template/component
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté"
    } else {
      this.message = "Identifiant ou mot de passe est incorrect."
    }
  }

  login() {
    this.message = "Tentative de connexion ..."
    this.auth.login(this.name, this.password)
      // subscribe pour optenir le résultat et je recois un boolean
      .subscribe((isLoggedIn: boolean) => {
        // avec ce boolean je met a jour le reste de mon appli
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/index"]);
        } else {
          // si il sais planter je rinitialise le password !
          this.password = '';
          this.router.navigate(["/login"])
        }
      })
  }


  logout() {
    this.auth.logout;
    this.message = "Vous êtes déconnecté.";
  }
}
