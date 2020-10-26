import { Component, OnInit } from '@angular/core';
import { DemochartService } from '../demochart.service';
import { Demochart } from '../models/demochart';
import * as Highcharts from 'highcharts';
import {MatDialog} from '@angular/material/dialog';
import { DialogColorSetDialogComponent } from './color-pick/colordialog.component';
import { Color } from '@angular-material-components/color-picker';
import { DialogSensorsSetDialogComponent } from './sensor-pick/sensordialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  Highcharts = Highcharts; 
  charts : Array<Demochart>=[];
  type: string = 'spline';
  color: Color;
  constructor(private chartservice: DemochartService,
               public dialog: MatDialog) { }

  ngOnInit(): void {    
    
    this.chartservice.currdatePeriod.subscribe(newdata=>{
       this.charts = [];
       Highcharts.setOptions({
         xAxis: {
            categories: this.getRangeDate(newdata.from_date,newdata.to_date)
         }
       });
       newdata.charts.forEach(element => {            
         this.charts.push(new Demochart({
            series: [{
               data: element.data,
               name: element.sensor_name,
               type: this.type
            }],
            title: {
               text: element.name
            },            
            yAxis: {
               title:{
                  text: element.sensor_type
               }
            }            
         }));         
      })
    })
  }

  getRangeDate(from_date: Date, to_date: Date):Array<string> {
     let dateArr = new Array<string>();
     let dt = new Date(from_date);
      while (dt <= to_date) {
         dateArr.push(new Date(dt).toLocaleDateString());
         dt.setDate(dt.getDate() + 1);
    }
      return dateArr;
  }

    changeType(type_chart: string,selected_chart: Highcharts.Chart, index: number) {
     this.type = type_chart;
     selected_chart.options.series.forEach(s =>{
         s.type = type_chart==='spline' ? 'spline':'bar'
     })
     this.charts.splice(index,1);
     this.charts.splice(index,0,new Demochart(selected_chart.options));
  }
  changeColor(selected_chart: Highcharts.Chart, index: number): void {
   const dialogRef = this.dialog.open(DialogColorSetDialogComponent, {
      width: '250px',
      data: {color: null}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.color = result;
      selected_chart.options.series[0].color = this.color.toHexString();
      this.charts.splice(index,1);
      this.charts.splice(index,0,new Demochart(selected_chart.options));
    });
    
}
selectSensor(selected_chart: Highcharts.Chart, index: number):void {
   const dialogRef = this.dialog.open(DialogSensorsSetDialogComponent, {
      width: '250px',
      data: {sensors: [
         {
            name: "sensor 1",
            checked: false
         },
         {
            name: "sensor 2",
            checked: false
         },
         {
            name: "sensor 3",
            checked: false
         },
         {
            name: "sensor 4",
            checked: false
         },
         {
            name: "sensor 5",
            checked: false
         },
         {
            name: "sensor 6",
            checked: false
         },
         {
            name: "sensor 7",
            checked: false
         },
      ]}
    });
    dialogRef.afterClosed().subscribe(result => {
     let selectedSensors = result.filter(elem=>elem.checked === true);
     selectedSensors.forEach(element => {
      let data_sensor = []
      for (let i = 0; i < 7; i++) {
        data_sensor.push(Math.random());
      }
       selected_chart.options.series.push({
         name: element.name,
         data: data_sensor,
         type: this.type == 'spline' ? 'spline':'bar'
      });
         this.charts.splice(index,1);
         this.charts.splice(index,0,new Demochart(selected_chart.options));
     });
    });
}
}


