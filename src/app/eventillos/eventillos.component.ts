import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventillos',
  templateUrl: './eventillos.component.html',
  styleUrls: ['./eventillos.component.css']
})
export class EventillosComponent implements OnInit {

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

}
