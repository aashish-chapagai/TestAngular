import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  apiResponse: any
  eachMovie: Movie= {
    id: 0,
    name: '',
    image: '',
    date: '',
    genre: '',
    description: ''
  }
  Movies: Movie[] = []
  getMoviesFromAPI() {
    this.http.get("https://movies-api14.p.rapidapi.com/shows",
    {
      headers: {
        'X-RapidAPI-Key': '3d37455d5emsh2f63493fbc688f5p178ab1jsne3addcc9261b',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    }
    ).subscribe(response => {
      this.apiResponse = response
      this.addMovies()
    })
    return this.Movies
  }
  addMovies() {
    this.apiResponse.movies.forEach((movie: any) => {
      this.eachMovie.id = movie._id
      this.eachMovie.name = movie.original_title
      this.eachMovie.image = movie.poster_path
      this.eachMovie.date = movie.first_aired
      this.eachMovie.genre = movie.genres
      this.eachMovie.description = movie.overview
      this.Movies.push(this.eachMovie)
      this.eachMovie = {
        id: 0,
        name: '',
        image: '',
        date: '',
        genre: '',
        description: ''
      }
    })
  }
}
