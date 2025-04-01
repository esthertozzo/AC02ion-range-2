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
  tipoCarro = "";
  valorViagem = 0;
  valorApp = 0;
  valorMotorista = 0;

  gasolina = 0;
  etanol = 0;
  diesel = 0;
  valorKMCombustivel = 0;
  tipoCombustivel = "";
  valorFinalCombustivel = "";
  litrosConsumidos = 0;
  valorPorLitro = 0;
  mediaKM = 0;

  alertButtons = ["voltar"];
  alertButtons1 = ["ok"];

  verificarValorViagem(){
    if (this.tipoCarro === "normal"){
      this.valorViagem = (this.valorKM*2.5)+5;
    }else if (this.tipoCarro === "superior"){
      this.valorViagem = (this.valorKM*3.5)+7.5;
    }else{
      this.valorViagem = (this.valorKM*5.5)+10;
    }
    this.valorApp = (this.valorViagem)*0.25;
    this.valorMotorista = (this.valorViagem)*0.75;
    if (this.valorViagem > 150){
      this.valorApp = (this.valorViagem)*0.2;
      this.valorMotorista = (this.valorViagem)*0.8;
      return;
    }

  }

  verificarValorCombustivel(){
    if(this.tipoCombustivel === "gasolina"){
      this.mediaKM = 12;
      this.valorPorLitro = 5;
    }else if(this.tipoCombustivel === "etanol"){
      this.mediaKM = 9;
      this.valorPorLitro = 4;
    }else{
      this.mediaKM = 15;
      this.valorPorLitro = 6;
    }
    this.litrosConsumidos = this.valorKMCombustivel/this.mediaKM;
    this.valorFinalCombustivel = (this.valorPorLitro*this.litrosConsumidos).toFixed(2);
  }

}
