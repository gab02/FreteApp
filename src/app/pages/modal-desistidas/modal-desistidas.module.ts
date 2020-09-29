import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDesistidasPageRoutingModule } from './modal-desistidas-routing.module';

import { ModalDesistidasPage } from './modal-desistidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDesistidasPageRoutingModule
  ],
  declarations: [ModalDesistidasPage]
})
export class ModalDesistidasPageModule {}
