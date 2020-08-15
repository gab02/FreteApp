import { Parametros } from './model/parametros.module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
valorCombustivel : number;
km :                 number;
lucro:              number;
cConsumoCar:        number;
total: number;
formGroup: FormGroup;
addLocal: boolean;
itens: Array<Parametros> = [];

ngOnInit(){
  this.gerarForm();
  console.log(this.cConsumoCar);

}
  constructor(private fb: FormBuilder,public alertController: AlertController,     public loadingController: LoadingController
        ) {}
  
  gerarForm() {
    this.formGroup = this.fb.group({
      valorCombustivel : ['', [Validators.required]],
      lucro : ['', [Validators.required]],
      km: ['', [Validators.required]],
      cConsumoCar: ['', [Validators.required]],

   });
 }
 /*
 async addItem1() {

  this.validarLote();
      if (this.WordpressForm.get("FromLocation").value === "") {
        this.presentAlert("O local de origem não está correto!!");
        console.log(this.WordpressForm.get("FromLocation").value);
      }
   
      if (this.WordpressForm.get("FromLotSerial").value === "") {
        this.presentAlert("A quantidade está nula!!");
        console.log(this.WordpressForm.get("FromLocation").value);
      }
      if (this.WordpressForm.get("ItemNumber").value === "") {
        this.presentAlert("O item ou lote não está correto!!");
        console.log(this.WordpressForm.get("FromLocation").value);
      } 
    
      
      else {
        const loading = await this.loadingController.create({
          cssClass: "my-custom-class",
          message: "Validando..."
         });
        await loading.present();
  
        console.log('a');
        this.validaQuantidade();
        const entity: Mov = new Mov();
        const itemPedidos = new Array<ItemMov>();
        this.itens.forEach(function (value) {
          itemPedidos.push(value);
        });
        console.log('b');
  
        // tslint:disable-next-line: no-unused-expression
        entity.GridData = itemPedidos;
        this.itens.push(this.WordpressForm.value);
        this.loadingController.dismiss();
        console.log('c');
       
        this.WordpressForm.reset();
  
        this.gerarForm();
        this.presentLoading2();
        this.addLocal = true;
        this.ScrollToBottom();
        console.log('d');
      }
    }
*/
removeItem(index: number) {
  this.itens.splice(index, 1);
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: "Como Apagar?",
    cssClass: 'custom-alertDanger',
    message: `<h3 color=success style="color: white;">ABRIR UM MODAL </h3>`, 
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {}}]});
  await alert.present();
}
  async cotacao(){
  const loading = await this.loadingController.create({
    cssClass: "my-custom-class",
    message: "Algoritimos Trabalhando..."
   });
  await loading.present();


   if((this.formGroup.get('km').value === undefined)||(this.formGroup.get('km').value === null)||(this.formGroup.get('km').value <= 0)){
     console.log('erro');
     loading.dismiss();
     this.formGroup.reset();

   }
   if((this.formGroup.get('cConsumoCar').value === undefined)||(this.formGroup.get('cConsumoCar').value === null)||(this.formGroup.get('cConsumoCar').value <= 0)){
    console.log('erro');
    loading.dismiss();
    this.formGroup.reset();

  }
  if(( this.formGroup.get('valorCombustivel').value === undefined)||(this.formGroup.get('valorCombustivel').value === null)||(this.formGroup.get('valorCombustivel').value === 0)){
    console.log('erro');
    loading.dismiss();
    this.formGroup.reset();

}

else{
  //1° parte, dividir o valor da quilometragem pelo consumo do carro 
let km = this.formGroup.get('km').value;
let cConsumoCar = this.formGroup.get('cConsumoCar').value;
 //2° parte, obter o resto desse valor
let resto  = km / cConsumoCar;
//3° parte, obter o valor total gasto 
let valorCombustivel= this.formGroup.get('valorCombustivel').value;
//Fazer valor da "km/consumo" sendo o valor final de gasto (ainda sem lucro)
this.total = resto * valorCombustivel;
this.addLocal = true;
this.itens.push(this.formGroup.value);
loading.dismiss();
this.formGroup.reset();

}

  
}
}
