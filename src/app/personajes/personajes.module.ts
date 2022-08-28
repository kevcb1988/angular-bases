import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListadoComponent } from "./listado/listado.component";
import { PersonajeComoponent } from "./personaje/personaje.component";

@NgModule({
    declarations: [
        PersonajeComoponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListadoComponent
    ]
})

export class PersonajesModule{}