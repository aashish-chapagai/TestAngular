import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieslistComponent } from '../movieslist/movieslist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MovieslistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
