import {Component} from '@angular/core'

@Component({
    selector: 'app-personaje',
    templateUrl: 'personaje.component.html'
})

export class PersonajeComoponent{
    nombre: string = 'Julia Donma'
    edad: number = 40

    // Getters
    get nombreCapitalizado(): string{
        return this.nombre.toLocaleUpperCase();
    }

    //Métodos - Methods
    obtenerNombre(): string{
        return `
            ${ this.nombre } - ${this.edad} años.
        `
    }

    cambiarNombre(): void{
        this.nombre = 'Septimio Severo';
    }

    cambiarEdad(): void{
        this.edad = 60
    }
}   