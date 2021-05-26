import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieservicesService } from 'src/app/services/movieservices.service';
import { genreType } from '../models/genre.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public genre:string='';
  public genreurl:string='';
  genres:genreType[]=[];

  constructor(private route:Router,private router:ActivatedRoute,private movieService:MovieservicesService) { }

  ngOnInit(): void {
this.router.params.subscribe(params=>{
  let genre = params['genre']
  if(genre){
    this.movieService.getGenerMovies(genre).subscribe(data=>{
      
    })}
    else{
      this.movieService.getGeners().subscribe(data=>{
        this.genres=data;
        this.genre=data[0].genre;
        console.log(this.genres[0])
        //this.route.navigate(['/'+this.genre.navi]);
      });
    }
  
})
  }

}
