import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',

    // archivo por separados
    styleUrls: ['./personas.component.css']
    
    //Archivo directo
    // styles: [`
    // h1{
    //     color:blue;
    // }
    // `]

})
export class PersonasComponent{
    
    deshabilitar = false
    mensaje = 'No se ha agregado ninguna persona'
    titulo = ''

    agregarPersona(){

        this.mensaje = 'Persona agregada'

    }

   /* modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value
    }*/
}