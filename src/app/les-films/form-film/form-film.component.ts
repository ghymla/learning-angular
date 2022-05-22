import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../film/film';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent implements OnInit {
  @Input() film: Film;
  filmUnique: Film|undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit(){
    const filmId: string|null = this.route.snapshot.paramMap.get('id')

    // si j'ai quelque chose j'injecte dans mon model l'id
    // je récup mon service pour choper l'id
    if (filmId) {
      this.filmUnique = this.filmService.getShowFilm(+filmId);
    }
  }

  onSubmit(filmForm: NgForm) {
    console.log(filmForm.value);  // { first: '', last: '' }
    console.log(filmForm.valid);  // false
    if (this.filmUnique){
      this.router.navigate(["show-film", this.filmUnique.id])
    }

  }
}
