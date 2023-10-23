import * as math from 'mathjs';
import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  history = '';
  isResult = false;
  valor1!: number;
  valor2!: number;
  operation!: number;
  isReadOnly: boolean = true;
  isOperation: boolean = false;
  constructor() { }

  addDigit(valor: string) {
    if (((this.visor.length == 1) && (this.visor == '0')) || (this.isResult == true)) {
      this.isResult = false;
      this.visor = valor;
    }
    else {
      this.visor += valor;
    }
  }

  addOperation(valor: number) {
    if(this.visor != '0') {
      switch (valor) {
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
  }

  evaluate() {
    this.history = this.visor;
    this.visor = math.evaluate(this.visor).toString();
    this.isResult = true;
  }


  toZero() {
    this.history = '';
    this.visor = '0';
  }

  invertSignal() {
    if (this.visor.includes('+')
    || this.visor.includes('*')
    || this.visor.includes('-', 1)
    || this.visor.includes('/')) {
      this.isOperation = true;
    }
    if ((this.visor.charAt(0) != '0') && !this.isOperation) {
      console.log("hhhh")
      this.visor = (+this.visor*(-1)).toString();
    }
  }

  toPercent() {
    this.visor = ((+this.visor) / 100).toString();
  }
}

