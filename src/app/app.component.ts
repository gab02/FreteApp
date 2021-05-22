import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  showFiller = false;
valor: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.valor = false;
    this.initializeApp();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  sair(){
    this.router.navigate(['pages', 'login']);
    this.valor = false;

  }
  dash(){
    this.router.navigate(['pages', 'preview']);

  }
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  home() {
    console.log('wath');

    this.router.navigate(['pages', 'home']);
  }

}
