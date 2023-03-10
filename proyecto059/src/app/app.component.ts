import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto059';

  resultado!: string;
  json !: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    if (this.formularioContacto.valid){
      this.resultado = "Todos los datos son válidos";
      this.json = JSON.stringify(this.formularioContacto.value);
      alert(this.json);
    } else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

}
