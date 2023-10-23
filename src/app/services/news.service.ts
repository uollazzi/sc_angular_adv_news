import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/news';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": environment.NEWS_API_KEY
    })
  }

  search(q: string, searchIn: string = "title") {
    const url = `${environment.NEWSAPI_BASE_URL}/everything?q=${encodeURI(q)}&language=it&searchIn=${searchIn}`;
    console.log(url);
    return this.http.get<SearchResponse>(url, this.httpOptions);
  }
}
