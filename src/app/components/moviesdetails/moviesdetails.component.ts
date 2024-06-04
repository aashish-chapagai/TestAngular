import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { Movie } from '../../movie';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moviesdetails',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './moviesdetails.component.html',
  styleUrl: './moviesdetails.component.css'
})
export class MoviesdetailsComponent {
  Movies: Movie[] = []
  routeobj: any
  movieid: any
  Movie: Movie = {
    id: 0,
    name: '',
    image: '',
    date: '',
    genre: '',
    description: ''
  }
  constructor(private moviesservice: MoviesService, private route: ActivatedRoute) {
    this.Movies = this.moviesservice.getMoviesFromAPI()
    this.routeobj = this.route.params
    this.movieid = this.routeobj._value['movie.id']
    console.log(this.movieid)
    this.Movies.forEach(movie => {
      if (movie.id == this.movieid) {
        this.Movie = {
          id: movie.id,
          name: movie.name,
          image: movie.image,
          date: movie.date,
          genre: movie.genre,
          description: movie.description
        }
      }
    })
  }
}
