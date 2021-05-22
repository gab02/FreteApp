import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRealizadasPageRoutingModule } from './modal-realizadas-routing.module';

import { ModalRealizadasPage } from './modal-realizadas.page';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    IonicModule,
    ModalRealizadasPageRoutingModule
  ],
  declarations: [ModalRealizadasPage]
})
export class ModalRealizadasPageModule {}
