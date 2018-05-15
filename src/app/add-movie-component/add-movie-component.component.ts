import { Component, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Imovies } from '../models/movies.model';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-add-movie-component',
  templateUrl: './add-movie-component.component.html',
  styleUrls: ['./add-movie-component.component.css']
})
export class AddMovieComponentComponent {
  email = '';
  formMovie: Imovies = {
    author : this.email,
    movie: null,
    rating: null,
    comment: null
  };
  STORAGE_KEY = 'looger Email';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private _apiService: ApiService, private _router: Router) {
    if (storage.has(this.STORAGE_KEY)) {
      this.email = storage.get(this.STORAGE_KEY);
    }
   }

  saveMovie(): void {
    this._apiService.registerMovie(this.formMovie).subscribe();
    window.location.reload();
    this._router.navigate(['blog']);
  }

}
