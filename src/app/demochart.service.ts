
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Demochart, stubChart } from './models/demochart';

@Injectable({
  providedIn: 'root'
})
export class DemochartService {

  constructor() { }

  private datePeriod = {
    from_date: new Date(),
    to_date: new Date(),
    charts: Array<stubChart>()
  }
  private dateperiodSource = new BehaviorSubject(this.datePeriod);
  currdatePeriod = this.dateperiodSource.asObservable();


  setNewDataStub(from_date: Date, to_date: Date) {
    let newDatePeriod = {
      from_date: new Date(),
      to_date: new Date(),
      charts: Array<stubChart>()
    };
    newDatePeriod.from_date = from_date;
    newDatePeriod.to_date = to_date;
    let days = (to_date.getTime() - from_date.getTime())/(1000*3600*24);
    for (let index = 0; index < 4; index++) {
      let data_sensor = []
      for (let i = 0; i < days; i++) {
        data_sensor.push(Math.random());
      }
      newDatePeriod.charts.push({
        name: "Data from sensor " + (index+1).toString(),
        sensor_name: "sensor " + (index+1).toString(),
        sensor_type: "sensor type " + (index+1).toString(),
        data: data_sensor
      });
    }
    this.dateperiodSource.next(newDatePeriod);
  }

}
