import {Chart} from 'angular-highcharts';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-chart',
  styleUrls: ['./chart.component.css'],
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  @Input() initial: any;
  public chart: any;

  ngOnInit(): void {
    // console.log(this.initial);
    this.chart = new Chart({
      chart: {
        width: 600,
        type: 'column'
      },
      title: {
        text: 'sample line'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Series 1',
        data: [10, 20, 30]
      }]
    });
  }

  addRandomPoint() {
    this.chart.addPoint(Math.floor(Math.random() * 100));
  }
}
