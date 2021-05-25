import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genremovies',
  templateUrl: './genremovies.component.html',
  styleUrls: ['./genremovies.component.css']
})
export class GenremoviesComponent implements OnInit {
 @Input() public GenreName?:string ;
 @Input() public GenreImageUrl?:string;
public num =5;
  constructor() { }

  ngOnInit(): void {
  }
  movieInfo(){
    console.log("card clicked");
  }

}
