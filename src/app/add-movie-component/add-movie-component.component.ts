import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Imovies } from '../models/movies.model';

@Component({
  selector: 'app-add-movie-component',
  templateUrl: './add-movie-component.component.html',
  styleUrls: ['./add-movie-component.component.css']
})
export class AddMovieComponentComponent {
  email = this._apiService.email;
  formMovie: Imovies = {
    author : this.email,
    movie: null,
    rating: null,
    comment: null
  };
  constructor(private _apiService: ApiService, private _router: Router) {

   }

  saveMovie(): void {
    this._apiService.registerMovie(this.formMovie).subscribe();
    window.location.reload();
    this._router.navigate(['blog']);
  }

}
