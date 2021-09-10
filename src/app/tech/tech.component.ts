import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsapiService) { }

  // tech News Data
  techNewsData:any=[];

  ngOnInit(): void {
    this.api.tech().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData=result.articles;
    })
  }
}
