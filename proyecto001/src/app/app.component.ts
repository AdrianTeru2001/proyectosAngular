import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';

  nombre:string = 'Rodriguez Pablo';
  edad:number = 40;
  email:string = 'rpablo@gmail.com';
  sueldos:number[] = [1700, 1600, 1900];
  activo:boolean = true;

  esActivo():string {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

  contador:number = 1;

  incrementar():void{
    this.contador++;
  }

  decrementar():void{
    this.contador--;
  }
  
}
