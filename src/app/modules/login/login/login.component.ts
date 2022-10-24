import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
