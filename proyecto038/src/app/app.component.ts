import { Component, OnInit } from '@angular/core';

declare var $: any; //ADD THIS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'proyecto038';
  title = 'pruebas-bootstrap4';

  ngOnInit(): void {
     $('[data-toggle="popover"]').popover()
  }

  aceptar(){
    alert("Ha pulsado Aceptar!");
  }

  cancelar(){
    alert("Ha pulsado Cancelar!");
  }
}
