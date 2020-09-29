import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTransitoPage } from './modal-transito.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTransitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTransitoPageRoutingModule {}
