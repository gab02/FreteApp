import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDesistidasPageRoutingModule } from './modal-desistidas-routing.module';

import { ModalDesistidasPage } from './modal-desistidas.page';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

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
    ModalDesistidasPageRoutingModule
  ],
  declarations: [ModalDesistidasPage]
})
export class ModalDesistidasPageModule {}
