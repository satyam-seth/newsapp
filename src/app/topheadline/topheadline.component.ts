import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:NewsapiService) { }

// display headlines data
  topHeadlinesData:any=[];
  ngOnInit(): void {
    this.api.topHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData=result.articles;
    })
  }
}
