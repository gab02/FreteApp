import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {InputNumberModule} from 'primeng/inputnumber';

import { HomePageRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api/shared';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputNumberModule,
    HomePageRoutingModule,
    ChartModule,
    ToastModule,

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
