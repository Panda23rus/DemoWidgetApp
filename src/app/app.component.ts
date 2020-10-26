import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemochartService } from './demochart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chartwidget-app';
  from_date: Date ;
  to_date: Date;
  constructor(private chartservice: DemochartService,private route: Router) {

  }
  ngOnInit(){
    let current = new Date();
		let weekstart = current.getDate() - current.getDay() + 1;
    let weekend = weekstart + 6;
    this.from_date = new Date(current.setDate(weekstart));
    this.to_date = new Date(current.setDate(weekend));
    this.getData();
  }
  getData() {
    this.chartservice.setNewDataStub(this.from_date,this.to_date);
    this.route.navigate(['./dashboard']);
  }
}
