import { Component, OnInit } from '@angular/core';
import { Film } from '../film/film'
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.scss']
})
export class ShowFilmComponent implements OnInit {
  film: Film | undefined // je prend le model de ma liste qui servira de foreach

  // j'importe activateRoute POUR AVOIR ACCES a diférent params
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    // je chope l'id en string car angular est chiant avec les type
    // je met l'id dans une var
    const filmId: string|null = this.route.snapshot.paramMap.get('id')

    // si j'ai quelque chose j'injecte dans mon model l'id
    // je récup mon service pour choper l'id
    if (filmId) {
      this.filmService.getShowFilm(+filmId).subscribe(
        film => this.film = film
      );
    }
  }

  editFilm(film: Film){
    this.router.navigate(["edit-film", film.id])
  }


  goToIndex(){
    this.router.navigate(["index"]);
  }

  deleteFilm(film: Film) {
    // suppression du film grace a sont Id
    this.filmService.deleteFilmById(film.id)
      // avecsubscribe je peux le rediriger vers l'index
      .subscribe(() => this.goToIndex());
  }
}
