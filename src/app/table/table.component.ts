import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elem = document.querySelector('select');
    const instance = M.Select.init(elem);
  }

}
