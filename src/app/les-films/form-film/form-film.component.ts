import { Component, Input } from '@angular/core';
import { Film } from '../film/film';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent  {
  @Input() film: Film|undefined;


  constructor(
    private router: Router
  ) { }

  onSubmit(filmForm: NgForm) {
    console.log(filmForm.value);  // { first: '', last: '' }
    console.log(filmForm.valid);  // false
    if (this.film){
      this.router.navigate(["show-film", this.film.id])
    }

  }
}
