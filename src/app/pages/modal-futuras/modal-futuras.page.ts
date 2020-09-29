import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-futuras',
  templateUrl: './modal-futuras.page.html',
  styleUrls: ['./modal-futuras.page.scss'],
})
export class ModalFuturasPage implements OnInit {

  constructor(private router: Router,public modalController: ModalController) { }

  ngOnInit() {
  }
  sair(){
    this.router.navigate(['pages', 'login']);

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
