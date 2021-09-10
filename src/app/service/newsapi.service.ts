import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  // top Headlines API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=3a8c7857853e4288b8af1c7cbdbde0a2';

  // tech News API URL
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3a8c7857853e4288b8af1c7cbdbde0a2';

  // business News API URL
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a8c7857853e4288b8af1c7cbdbde0a2';

  // For Business Logic
  buzz():Observable<any>{
    return this._http.get(this.businessNews)
  }

  // Use tech Methods
  tech():Observable<any>{
    return this._http.get(this.techNews)
  }

  topHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }
}
