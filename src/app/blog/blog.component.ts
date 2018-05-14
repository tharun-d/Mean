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
  email = this._apiService.email;
  movies: Imovies[];

  constructor(private _apiService: ApiService, private _router: Router) {
    this._apiService.getAllMovies().subscribe((result) => {
        this.movies = result;
    });
   }

}
