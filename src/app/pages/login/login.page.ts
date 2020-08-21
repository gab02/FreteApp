import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor( private fb: FormBuilder,  private router: Router, public alertController: AlertController,
    ) { }

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      user: ['', []],
      password: ['', []]
    });
  }
login(event: Event){
let user = this.form.get('user').value;
let pass = this.form.get('password').value;

  if((user === 'Joao') && (pass === '123456')){
   
    this.router.navigate(['pages', 'preview']);
    this.form.reset();

  }else{
    this.presentAlert();
    this.form.reset();
  }




  //let btn = this.form.get('login-button').value;
 // let form = this.form.get('form').value;
 // let wrap = this.form.get('wrapper').value;
  //btn.event.preventDefault();
 // form.fadeOut(500);
 // wrap.addClass("form-success");
}
/*  $("#login-button").click(function (event) {
    event.preventDefault();
  
    $("form")
    $(".wrapper").addClass("form-success");
  });
  */
 async presentAlert() {
  const alert = await this.alertController.create({
    header: "Erro na validação",
    cssClass: 'custom-alertDanger',
    message: `<h3 color=success style="color: white;">Login ou senha errado</h3>`, 
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {}}]});
  await alert.present();
}
}
