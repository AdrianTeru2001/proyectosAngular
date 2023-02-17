import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

  @Input() valor: number=1;

  constructor() { }

  ngOnInit() {
    
  }

}