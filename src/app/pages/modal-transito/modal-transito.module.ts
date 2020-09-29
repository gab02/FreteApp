import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTransitoPageRoutingModule } from './modal-transito-routing.module';

import { ModalTransitoPage } from './modal-transito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTransitoPageRoutingModule
  ],
  declarations: [ModalTransitoPage]
})
export class ModalTransitoPageModule {}
