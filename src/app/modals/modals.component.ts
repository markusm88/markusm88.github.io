import { Component, OnInit } from '@angular/core';
declare var M: any; // Fix for initializing materialize "M. ..."

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  private currentDate =  new Date().toString().split(" ").slice(0, 4).join(" ");
  
  constructor() { }

  ngOnInit() {
    let options = {
      format: "dd. mmm yyyy",
      setDefaultDate: true,
      defaultDate: this.currentDate,
      yearRange: 5,
      minDate: null,  // Should set Todays date minus 2 years
      maxDate: null   // Should set Todays date plus 2 years
    };
    let datepickerModal = document.querySelector('.datepicker3');
    let instance = M.Datepicker.init(datepickerModal, options);

    let categoryPickerMobile = document.querySelector('.category-picker-mobile');
    let instance2 = M.Select.init(categoryPickerMobile);
  }

}
