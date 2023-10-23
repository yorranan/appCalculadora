import { ThisReceiver } from '@angular/compiler';
import { Component, numberAttribute } from '@angular/core';

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
  isReadOnly: boolean = true;
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
    switch(valor) {
      case 0: {
        this.visor += '+';
        break;
      }
      case 1: {
        this.visor += '-';
        break;
      }
      case 2: {
        this.visor += '*';
        break;
      }
      case 3: {
        this.visor += '/';
        break;
      }
    }
  }

  evaluate() {
    try {
      let result = eval(this.visor);
      this.visor = result.toString();
    } catch (error) {
      console.error("Comando de expressão inválida: ", error);
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
    this.visor = ((+this.visor)/100).toString();
  }
}

