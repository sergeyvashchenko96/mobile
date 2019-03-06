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

  constructor(private formBuilder: FormBuilder) {
    this.show = false;
  }

  ngOnInit() {
  }

  password() {
    this.show = !this.show;
  }

  checkForm() {
    console.log(this.myForm.value.password);
    if (this.myForm.value.email === '1@1' && this.myForm.value.password === '1') {
      return false;
    } else{
      return true;
    }
  }

}
