import { PreviewPageModule } from './pages/preview/preview.module';
import { PreviewPageRoutingModule } from './pages/preview/preview-routing.module';
import { LoginPageRoutingModule } from './pages/login/login-routing.module';
import { LoginPageModule } from './pages/login/login.module';
import { HomePageRoutingModule } from './pages/home/home-routing.module';
import { HomePageModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    HomePageModule,
    HomePageRoutingModule,
    LoginPageModule,
    LoginPageRoutingModule,
    PreviewPageRoutingModule,
    PreviewPageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
