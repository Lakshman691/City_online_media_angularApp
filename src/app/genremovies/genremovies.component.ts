import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from '../models/movie.model';
import { MovieservicesService } from '../services/movieservices.service';

@Component({
  selector: 'app-genremovies',
  templateUrl: './genremovies.component.html',
  styleUrls: ['./genremovies.component.css']
})
export class GenremoviesComponent implements OnInit {
 @Input() public GenreName?:string ;
 @Input() public GenreImageUrl?:string;
 public movies:movie[];
public num =5;
  constructor(private service:MovieservicesService,private router:Router) { }

  ngOnInit(): void {
    this.service.getGenerMovies(this.GenreName).subscribe(data=>{
  this.movies=data;
  this.movies.sort((b,a)=> a.RATING-b.RATING);
  console.log(data[0]);
    })
  
  }
  movieInfo(movie){
    this.router.navigate(["/movieInfo",this.GenreName,movie.id])
    //console.log("card clicked" + movie.id);
  }

}
