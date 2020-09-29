import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFuturasPage } from './modal-futuras.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFuturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFuturasPageRoutingModule {}
