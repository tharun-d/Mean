import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Imovies } from '../models/movies.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  movies: Imovies[];
  constructor(private _apiService: ApiService) { }
  email = this._apiService.email;


}
