import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:NewsapiService) { }

// Business news Data
  buzzNewsData:any=[];

  ngOnInit(): void {
    this.api.buzz().subscribe((result)=>{
      console.log(result.articles);
      this.buzzNewsData=result.articles;
    })
  }
}
