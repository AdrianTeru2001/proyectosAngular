import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

const routes: Routes = [
  {
    path:'dado',
    component: DadoComponent
  }, 
  {
    path:'cronometro',
    component: CronometroComponent
  },
  {
    path:'selectornumerico',
    component: SelectornumericoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
