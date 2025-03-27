import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  normal = 0;
  superior = 0;
  vip = 0;
  valorKM = 0;
  tipoCarro = 0;
  valorViagem = 0;

}
