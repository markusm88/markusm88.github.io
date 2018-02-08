import { Component, OnInit } from '@angular/core';
declare var noUiSlider: any;
declare var wNumb: any;

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let testSlider1 = document.getElementById('test-slider1'),
        testSlider2 = document.getElementById('test-slider2');
    
    let range_all_sliders = {'min': [0], 'max': [10000]}
    
    let categoryBudget = 3500;

    noUiSlider.create(testSlider1, {
     start: categoryBudget,
     connect: [true, false],
     step: 100,
     range: range_all_sliders,
     format: wNumb({
       decimals: 0,
       prefix: 'KR '
     }),
     /* pips: {
       mode: 'values',
       values: [0],
       stepped: true,
       density: 20
     } */
    });

    noUiSlider.create(testSlider2, {
      start: categoryBudget,
      connect: [true, false],
      step: 100,
      tooltips: true,
      range: range_all_sliders,
      format: wNumb({
        decimals: 0,
        prefix: 'KR '
      })
     });

    
  }

}
