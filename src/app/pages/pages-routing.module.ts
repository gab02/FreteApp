
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule' },
    { path: 'modal-realizadas', loadChildren: './modal-realizadas/modal-realizadas.module#ModalRealizadasPageModule' },
    { path: 'modal-desistidas', loadChildren: './modal-desistidas/modal-desistidas.module#ModalDesistidasPageModule' },
    { path: 'modal-transito', loadChildren: './modal-transito/modal-transito.module#ModalTransitoPageModule' },
    { path: 'modal-futuras', loadChildren: './modal-futuras/modal-futuras.module#ModalFuturasPageModule' },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
