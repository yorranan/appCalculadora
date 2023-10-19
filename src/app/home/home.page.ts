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

  addNumber(valor: string)  {
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

  calcular() {
    this.valor2 = +this.visor;
    switch(this.operacao) {
      case 0: {
        this.zerar()
        this.visor = "" + (this.valor1 + this.valor2);
        break;
      }
      case 1: {
        this.zerar()
        this.visor = "" + (this.valor1 - this.valor2)
        break;
      }
      case 2: {
        this.zerar()
        this.visor = "" + (this.valor1 * this.valor2)
        break;
      }
      case 3: {
        this.zerar()
        this.visor = "" + (this.valor1 / this.valor2)
        break;
      }
    }
  }

  zerar() {
    this.visor = '0';
  }
}

