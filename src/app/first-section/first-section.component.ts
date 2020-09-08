import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  firstQ: string;

  answer: string[] = ['Para nada','Varios días','Más de la mitad de los días','Casi todo los días'];

  constructor() { }

  ngOnInit(): void {
  }

}
