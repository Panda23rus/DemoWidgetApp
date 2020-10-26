import * as Highcharts from 'highcharts'

export class Demochart {
    constructor(public options: Object) {}
}

export interface stubChart {
    name: string,
    sensor_name: string,
    sensor_type: string,
    data: Array<number>
}