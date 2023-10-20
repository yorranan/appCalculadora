import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  valor1!: number;
  valor2!: number;
  operacao!: number;
  constructor() {}

  addDigit(valor: string)  {
    if ((this.visor.length == 1) && (this.visor == '0')) {
      this.visor = valor;
    }
    else {
      this.visor += valor;
    }
  }

  addOperation(valor: number) {
    this.operacao = valor;
    this.valor1 = +this.visor;
  }

  evaluate() {
    this.valor2 = +this.visor;
    switch(this.operacao) {
      case 0: {
        this.toZero()
        this.visor = '+' + (this.valor1 + this.valor2);
        break;
      }
      case 1: {
        this.toZero()
        this.visor = "-" + (this.valor1 - this.valor2)
        break;
      }
      case 2: {
        this.toZero()
        this.visor = "*" + (this.valor1 * this.valor2)
        break;
      }
      case 3: {
        this.toZero()
        this.visor = "/" + (this.valor1 / this.valor2)
        break;
      }
    }
  }

  toZero() {
    this.visor = '0';
  }

  invertSignal() {
    if (this.visor.charAt(0) != '0') {
      this.visor = (+this.visor*(-1)).toString();
    }
  }

  toPercent() {
    this.visor = (+this.visor).toString();
  }
}

