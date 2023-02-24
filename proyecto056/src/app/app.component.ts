import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto056';

  datos!:string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('Pepe Prueba'),
    mail: new FormControl('pepe@prueba.com'),
    mensaje: new FormControl('Prueba')
  });

  submit() {
    this.datos=`Nombre=${this.formularioContacto.value.nombre}
                Mail=${this.formularioContacto.value.mail}
                Mensaje=${this.formularioContacto.value.mensaje}
                `;
  }

}
