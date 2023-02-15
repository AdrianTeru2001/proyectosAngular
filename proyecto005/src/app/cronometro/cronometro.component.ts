import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  segundo=0;
  @Input() inicio: number=0;
  @Output() limpiarEvento = new EventEmitter();
  @Output() finalcountdown = new EventEmitter();
  constructor() { }

  iniciar() {
    this.limpiarEvento.emit();
    this.segundo = this.inicio;
    let cont = setInterval(() => {
      this.segundo--;
      if (this.segundo <= 0) {
        this.segundo = 0;
        this.finalcountdown.emit();
        clearInterval(cont);
      }
    }, 1000);
  }

}
