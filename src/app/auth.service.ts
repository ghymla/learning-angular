import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  // pour créé une rediretion vers la page voulu apres l'authentification
  redirectTo: string;

  constructor() { }

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == 'name' && password == 'secret');

    // un petit delais de 1s pour simuler la demande a un serveur
      // tap me sert a réécrire ma variable isloggedIn déclarer dans la classe
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn))
  }

  logout() {
    this.isLoggedIn = false;
  }

}
