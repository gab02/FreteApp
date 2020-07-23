import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
valorCombustivel: number;
km: number;
cConsumoCar: number;
formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  gerarFormItem() {
    this.formGroup = this.fb.group({
      valorCombustivel : ['', [Validators.required]],
      km: ['', [Validators.required, Validators.min(1)]],
      cConsumoCar: ['', [Validators.required, Validators.min(1)]],

   });
 }
cotação(){

let var1 = this.valorCombustivel * this.km;

console.log(var1);


}
}
