import { Component, OnInit } from '@angular/core';
declare var M: any;


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /* Dropdown */
    let dropdownOptions = {
      alignment: 'right',   // Defines the edge the menu is aligned to.
      constrainWidth: true, // If true, constrainWidth to the size of the dropdown activator.
      coverTrigger: true,   // If false, the dropdown will show below the trigger
      closeOnClick: true,   // If true, close dropdown on item click.
      hover: false,         // If true, the dropdown will open on hover.
      inDuration: 150,      // The duration of the transition enter in milliseconds.
      outDuration: 250,     // The duration of the transition out in milliseconds.
      onOpenStart: null,    // Function called when dropdown starts entering.
      onOpenEnd: null,      // Function called when dropdown finishes entering.
      onCloseStart: null,   // Function called when dropdown starts exiting.
      onCloseEnd: null      // Function called when dropdown finishes exiting.
    }; 

    let dropdownElem = document.querySelector('.dropdown-trigger');
    let dropdown = M.Dropdown.init(dropdownElem, dropdownOptions);

    
    /* Tooltips */
    let tooltipElem = document.querySelector('.tooltipped');
    let tooltipOptions = {
      html: "Tooltip text",
      position: 'top',
      margin: 5,
      transitionMovement: 10,
      inDuration: 150,
      outDuration: 250,
      exitDelay: 0,
      enterDelay: 200
    }; 
    let tooltip = M.Tooltip.init(tooltipElem, tooltipOptions);

  }

}
