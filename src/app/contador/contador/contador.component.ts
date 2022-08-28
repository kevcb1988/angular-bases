import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>¡Hola Mundo desde Angular!</h1>
        <h2>{{ title }}</h2>
        <h3>My base is: {{myBase}}</h3>

        <button (click)="accumulate( -myBase )">-{{ myBase }}</button>

        <span> {{ myNumber }} </span>

        <button (click)="accumulate( myBase )">+{{ myBase }}</button>
    `
})

export class ContadorComponent {
    title: string = 'Contador';
    myNumber: number = 10;
    myBase: number = 45;
  
    substract(){
      this.myNumber -= 1;
    }
  
    addition(){
      this.myNumber += 1;
    }
  
    // Mediante el uso de parámetros ajustamos la operación
    accumulate(value:number){
      this.myNumber += value
    }  
}