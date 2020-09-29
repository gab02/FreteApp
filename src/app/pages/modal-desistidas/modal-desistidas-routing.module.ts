import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDesistidasPage } from './modal-desistidas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDesistidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDesistidasPageRoutingModule {}
