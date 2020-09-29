import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-transito',
  templateUrl: './modal-transito.page.html',
  styleUrls: ['./modal-transito.page.scss'],
})
export class ModalTransitoPage implements OnInit {

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
