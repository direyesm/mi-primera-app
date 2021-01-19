import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Diego';
  apellido: string = 'Reyes'
  edad: number = 30

  // llamar metodos privados 
  /* private edad: number = 30
    getEdad(): number{
     return this.edad
   }*/
}
