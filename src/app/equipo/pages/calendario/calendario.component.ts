import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
}




