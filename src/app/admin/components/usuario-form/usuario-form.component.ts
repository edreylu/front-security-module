import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  nameField = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => console.log(value));
  }

}
