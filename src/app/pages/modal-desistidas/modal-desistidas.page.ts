import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-desistidas',
  templateUrl: './modal-desistidas.page.html',
  styleUrls: ['./modal-desistidas.page.scss'],
})
export class ModalDesistidasPage implements OnInit {

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
