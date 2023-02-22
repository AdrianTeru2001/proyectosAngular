import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto008';

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  articulosNuevos = [{codigo:6, descripcion:'peras', precio:5.45},
               {codigo:7, descripcion:'arroz', precio:1.3},
               {codigo:8, descripcion:'sandria', precio:21.30},
               {codigo:9, descripcion:'sardina', precio:23},
               {codigo:10, descripcion:'mandarina', precio:33.23},
              ];

}
