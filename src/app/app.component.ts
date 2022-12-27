import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrimeCalculator } from './app.prime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'practice';
  prime10 : number=0;
  prime10000 : number=0;

  constructor (){} 

  find10thPrimeNumber(){
    this.prime10=PrimeCalculator.findNthPrimeNumber(10);
  }

  find10000thPrimeNumber(){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.prime10000=data;
        // console.log(`page got message: ${data}`);
      };
      worker.postMessage(10000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
