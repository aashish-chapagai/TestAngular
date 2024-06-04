import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movieslist.component.html',
  styleUrl: './movieslist.component.css'
})
export class MovieslistComponent {
  Movies: Movie[] = []
  constructor(private moviesservice: MoviesService, private router: Router) {
    this.Movies = this.moviesservice.getMoviesFromAPI()
  }
  openMovie(movie: Movie) {
    this.router.navigate(["details", movie.id])
  }
}
