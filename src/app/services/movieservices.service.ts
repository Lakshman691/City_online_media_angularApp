import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { genreType } from '../models/genre.model';
import { movie } from '../models/movie.model';

const httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieservicesService {

  baseUrl = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  public getGeners():Observable<genreType[]>{
    return this.http.get<genreType[]>(this.baseUrl + 'genres',httpOptions )
  
  }
  public getGenerMovies(genre:string):Observable<movie[]>{
    return of();
  }
}
