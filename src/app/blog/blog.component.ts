import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Imovies } from '../models/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  movies: Imovies[];
    email = this._apiService.email;
    formMovie: Imovies = {
    author : this.email,
    movie: null,
    rating: null,
    comment: null
  };
  constructor(private _apiService: ApiService, private _router: Router) {
    this._apiService.getAllMovies().subscribe((result) => {
        this.movies = result;
    });
   }

  saveMovie(): void {
    this._apiService.registerMovie(this.formMovie).subscribe();
    this._router.navigate(['blog']);
  }
}
