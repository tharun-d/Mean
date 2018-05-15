import { Component, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Imovies } from '../models/movies.model';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  email = '';
  movies: Imovies[];
  STORAGE_KEY = 'looger Email';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private _apiService: ApiService, private _router: Router) {
    this._apiService.getAllMovies().subscribe((result) => {
        this.movies = result;
        this. email = (this.storage.get(this.STORAGE_KEY));
    });
   }

}
