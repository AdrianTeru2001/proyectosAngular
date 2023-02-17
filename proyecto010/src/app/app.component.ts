import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from './articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto010';

  articulos!: Articulo[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Articulo[]>("https://scratchya.com.ar/vue/datos.php")
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );
  }

}
