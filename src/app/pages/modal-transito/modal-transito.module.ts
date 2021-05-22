import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';

import { ModalTransitoPageRoutingModule } from './modal-transito-routing.module';
import {MatButtonModule} from '@angular/material/button';

import { ModalTransitoPage } from './modal-transito.page';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

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
   
    ModalTransitoPageRoutingModule
  ],
  declarations: [ModalTransitoPage]
})
export class ModalTransitoPageModule {}
