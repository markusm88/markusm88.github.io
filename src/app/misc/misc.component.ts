import { Component, OnInit } from '@angular/core';
declare var spirit: any;

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* 
    TODO: Create logo anim i Haiku 
    Rember to delete dependences: nettbudsjett.json and code inside angluar-cli.json
    */
    const animation = './assets/nettbudsjett.json';
    spirit.setup().then(() => spirit.load(animation)).then(groups => {
        groups.get('Logo-wrapper').construct().yoyo(true).repeat(0).resume()
        groups.get('NB-Logo', 'Logo-wrapper').construct().yoyo(true).repeat(0).resume()
    });
  }

}
