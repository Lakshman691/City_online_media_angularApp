import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreType } from '../models/genre.model';
import { MovieservicesService } from '../services/movieservices.service';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

  public movieId;
  public movieInfo;
  GenreName;
  genres:genreType[]
  edit = true;
  constructor(private route:ActivatedRoute,private service:MovieservicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.movieId=params['id']
      this.service.getMovieInfo(this.movieId).subscribe(data=>{
        this.movieInfo=data[0];
        console.log (this.movieInfo)
        this.GenreName=this.movieInfo.GENRE
        })
        this.service.getGeners().subscribe(data=>{
          this.genres = data;
          
        })
    })
  }
  editToggle(){
this.edit=false;
  }
  genrechange(selected){
    this.edit=true;
    console.log(selected)
    this.movieInfo.GENRE=selected.value
    this.GenreName=this.movieInfo.GENRE
    console.log(selected.valueChange)
    this.service.changeGenre(this.GenreName,this.movieId).subscribe(data=>{
      console.log(data)
    })
    
  }
  resetdata(genre){
    this.movieInfo.GENRE=genre;
    this.edit=false
  }

}
