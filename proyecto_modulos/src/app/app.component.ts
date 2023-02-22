import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_modulos';

  mensaje='';

  final() {
    this.mensaje = "El temporizador ha llegado a cero";
  }

  limpiarMensaje() {
    this.mensaje = "";
  }
  
}
