import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronometroComponent } from './cronometro/cronometro.component';



@NgModule({
  declarations: [
    CronometroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CronometroComponent]
})
export class ElementosModule { }
