import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRealizadasPage } from './modal-realizadas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRealizadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRealizadasPageRoutingModule {}
