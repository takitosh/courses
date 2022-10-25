import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { createEmailValidator } from '../../../shared/validators/emailValidator.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    './registration.component.scss',
    '../../../shared/styles/index.scss'
  ]
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Form Submitted!");
    } else {
      this.submitted = true;
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('', [
        Validators.required,
        createEmailValidator()
      ]),
      password: new FormControl('', Validators.required)
    });
  }
}
