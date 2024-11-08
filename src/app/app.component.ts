import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SpaceValidator} from '../validators/space.validator';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MatFormField, MatLabel, MatCard, MatCardHeader, MatCardActions, MatInput, MatButton, MatCardTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validators';

  userForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    emailId: new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    userCode: new FormControl("", [Validators.required,SpaceValidator.validateSpace]),
  });submit() {
    console.log(this.userForm.value);
  }cancel() {
    this.userForm.reset();
  }
}
