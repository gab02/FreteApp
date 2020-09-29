import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRealizadasPageRoutingModule } from './modal-realizadas-routing.module';

import { ModalRealizadasPage } from './modal-realizadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRealizadasPageRoutingModule
  ],
  declarations: [ModalRealizadasPage]
})
export class ModalRealizadasPageModule {}
