import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-eventillos',
  templateUrl: './eventillos.component.html',
  styleUrls: ['./eventillos.component.css']
})
export class EventillosComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit() {
  }

  clicked($event) {
    const textoBoton = $event.target.innerHTML;

    switch (textoBoton) {
      case 'Bueno':
        console.log('¡Buenos días!');
        break;
      case 'Feo':
        console.log('¡Y tú qué miras!');
        break;
      case 'Malo':
        console.log('¡Vete a cagar!');
        break;
      case 'default':
        console.log('No has pulsado ninguno de los 3 botones');
        break;
    }
  }

  mousedOver($event) {
    const textoBoton = $event.target.innerHTML;

    if (textoBoton === 'Bueno') {
      console.log('Jijijijijiji');
    } else {
      console.log('El ratón ha entrado en un botón que no es el bueno');
    }
  }

  onSubmitForm(basicForm: NgForm) {
    // La gestión de este evento sólo sería para comprobar si formulario enviado, válido, etc.
    console.log(basicForm);
    console.log(basicForm.controls);
    console.log(basicForm.submitted);

    console.log(this.nombre);
  }

  onBlur($event) {
    console.log('Esta función no sé para qué la quiero');
    const valorInput = $event.target.value;
    console.log(valorInput);

    console.log();

    if (valorInput.length >= 5) {
      console.log('La longitud del campo es válida');
    }
  }

}
