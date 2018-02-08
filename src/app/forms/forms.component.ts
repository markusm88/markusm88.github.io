import { Component, OnInit } from '@angular/core';
declare var M: any; // Fix for initializing materialize "M. ..."

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public currentDate =  new Date;

  constructor() { }

  
  ngOnInit() {
    const d = new Date("January 1, 2017 11:13:00");
    const today = new Date;

    const options = {
      format: "dd.mmm yyyy",
      setDefaultDate: true,
      defaultDate: today,
      yearRange: 5,
      minDate: null,  // Should set Todays date minus 2 years
      maxDate: null   // Should set Todays date plus 2 years
    };
    const elem = document.querySelector('.datepicker');
    const elem2 = document.querySelector('.datepicker2');
    
    const instance = M.Datepicker.init(elem, options);
    const instance2 = M.Datepicker.init(elem2, options);
  }

}
