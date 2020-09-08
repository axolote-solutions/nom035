import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sex = [
    {id: 1, text: "Femenino"},
    {id: 2, text: "Masculino"}
  ];

  area = [
    {idA: 1, text: "Finanzas"},
    {idA: 2, text: "RH"},
    {idA: 3, text: "TI"},
    {idA: 4, text: "Supply Chain"},
    {idA: 5, text: "Operaciones"},
    {idA: 6, text: "Legal"},
    {idA: 7, text: "Comercial / Ventas"},
    {idA: 8, text: "Administración"},
    {idA: 9, text: "Otro"},
  ];

  level = [
    {idL: 1, text: "Comité Directivo"},
    {idL: 2, text: "Subdirección"},
    {idL: 3, text: "Gerencia"},
    {idL: 4, text: "Jefatura"},
    {idL: 5, text: "Operativo"},
    {idL: 6, text: "Otro"}
  ];

  years = [1];

  age = [10];


  firstName: string = '';
  lastName: string = '';
  institutionalEmail: string = '';
  personalEmail: string = '';
  dataForm : FormGroup;

  titleAlert:string = '*Este campo es obligatorio';

  
  constructor(
    private df: FormBuilder
  ) {
    this.dataForm = this.df.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      area: ['', Validators.required],
      level: ['', Validators.required],
      years: ['', Validators.required],
      institucionalEmail: ['', Validators.compose([Validators.email, Validators.required])],
      personalEmail: ['', Validators.compose([Validators.email, Validators.required])]
    });
    }

  addPost(post: any) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.age = post.age;
    this.sex = post.sex;
    this.area = post.area;
    this.level = post.level;
    this.years = post.years;
    this.institutionalEmail = post.institutionalEmail;
    this.personalEmail = post.personalEmail;
  }

  ngOnInit(): void {
  }

  
}
