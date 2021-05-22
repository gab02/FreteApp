import { AppComponent } from './../../app.component';
import { ModalDesistidasPage } from '../modal-desistidas/modal-desistidas.page';
import { ModalFuturasPage } from '../modal-futuras/modal-futuras.page';
import { ModalTransitoPage } from '../modal-transito/modal-transito.page';
import { ModalRealizadasPage } from '../modal-realizadas/modal-realizadas.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController, public app: AppComponent) { }

  ngOnInit() {
    this.app.valor = true;

  }
cotacao(){
  this.router.navigate(['pages', 'home']);

}
async ModalRealizadas() {
  const modal = await this.modalController.create({
    component: ModalRealizadasPage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}

async ModalDesistidas() {
  const modal = await this.modalController.create({
    component: ModalDesistidasPage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}

async ModalFuturas() {
  const modal = await this.modalController.create({
    component: ModalFuturasPage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}
  
async ModalTransito() {
  const modal = await this.modalController.create({
    component: ModalTransitoPage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}
}
