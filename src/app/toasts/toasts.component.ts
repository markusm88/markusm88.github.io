import { Component, OnInit } from '@angular/core';
declare var M: any;


@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Get toast DOM Element, get instance, then call dismiss function
    /* let toastSuccess = document.querySelector('.toast-success');
    let toastInstance = M.Toast.getInstance(toastSuccess); */
    /* toastInstance.dismiss(); */
    
    
  }

  toastPlain(){
    let toastHTML = 'Toast';
    M.toast({html: toastHTML});
  }

  toastDark(){
    let toastHTML = 'Toast on dark w/btn <button class="btn-flat white-text">Angre</button>';
    M.toast({html: toastHTML, classes: 'toast-on-dark'});
  }

  toastSuccess(){
    let toastHTML = '<div class="icon-container green"><i class="material-icons">done</i></div>Toast success w/btn <button class="btn-flat">Angre</button>';
    M.toast({html: toastHTML, classes: 'toast-with-icon'});
  }

  toastWarning(){
    let toastHTML = '<div class="icon-container yellow"><i class="material-icons">priority_high</i></div>Toast warning';
    M.toast({html: toastHTML, classes: 'toast-with-icon'});
  }

  toastError(){
    let toastHTML = '<div class="icon-container red"><i class="material-icons">priority_high</i></div>Toast error';
    M.toast({html: toastHTML, classes: 'toast-with-icon'});
  }
  

}
