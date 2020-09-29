import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFuturasPageRoutingModule } from './modal-futuras-routing.module';

import { ModalFuturasPage } from './modal-futuras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFuturasPageRoutingModule
  ],
  declarations: [ModalFuturasPage]
})
export class ModalFuturasPageModule {}
