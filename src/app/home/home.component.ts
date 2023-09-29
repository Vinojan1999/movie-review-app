import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Create a variable
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTreandingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTreandingMovies() {
    this.http
      .get('https://movie-review-app-lac.vercel.app/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log("Trending Movies",this.trendingMovies);
      })
  }

  getTheatreMovies() {
    this.http
      .get('https://movie-review-app-lac.vercel.app/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log("Theatre Movies",this.theatreMovies);
      })
  }

  getPopularMovies() {
    this.http
      .get('https://movie-review-app-lac.vercel.app/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log("Popular Movies",this.popularMovies);
      })
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id])
  }
}
