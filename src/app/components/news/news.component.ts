import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Article[] = [];
  keywords: string = "";
  searchInOptions = ["title", "description", "content"];
  searchIn = "title";

  constructor(private ns: NewsService) {

  }

  ngOnInit(): void {

  }

  search() {
    if (this.keywords.trim().length > 0) {
      this.ns.search(this.keywords, this.searchIn).subscribe(sr => {
        console.log(sr.totalResults);
        this.news = sr.articles;
      })
    }

  }
}
