import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  personajes: string[] = [
    'Julia Domna',
    'Septimio Severo',
    'Basiano (Hijo)',
    'Geta (Hijo)'
  ]

  personajeEliminado: string = ""

  borrarPersonaje(){
    this.personajeEliminado = this.personajes.shift() || "";
  }

}
