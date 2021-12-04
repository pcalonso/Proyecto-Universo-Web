import {Component} from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

/**
 * @title List with sections
 */
@Component({
  selector: 'list-sections-example',
  styleUrls: ["equipo.component.css"],
  templateUrl: 'equipo.component.html',
})
export class EquipoComponent {
  disenio: Section[] = [
    {
      name: 'Marina Martin',
      updated: new Date('3/1/12'),
     
    },
    {
      name: 'Steve Right',
      updated: new Date('9/17/18'),
    },
    {
      name: 'Lucia López',
      updated: new Date('11/28/20'),
    },
  ];
  rss: Section[] = [
    {
      name: 'Valery Stechwick',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Romina Lintz',
      updated: new Date('4/18/16'),
    },
  ];
  seo: Section[] = [
    {
      name: 'Maria Giménez',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Leo Vinci',
      updated: new Date('4/18/16'),
    },
  ];
  desarrollo: Section[] = [
    {
      name: 'Pamela Carrasco',
      updated: new Date('12/10/21'),
    },
    {
      name: 'Javier Suarez',
      updated: new Date('12/15/21'),
    },
  ];
}

  

  
  
    
  