import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  show: boolean;

  constructor(private formBuilder: FormBuilder,) {
    this.show = false;
  }

  ngOnInit() {
  }

  password() {
    this.show = !this.show;
  }

}
