import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
cotacao(){
  this.router.navigate(['pages', 'home']);

}

}
