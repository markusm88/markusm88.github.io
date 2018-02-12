import { Component, OnInit } from '@angular/core';
declare var M: any;


@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var elem = document.querySelector('.collapsible');
    var instance = M.Collapsible.init(elem);
  }

}
