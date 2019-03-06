import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    email: ['1@1', Validators.required],
    password: ['1', Validators.required]
  });
  show: boolean;
  isValid = true;

  constructor(private formBuilder: FormBuilder, public router: Router) {
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
      this.isValid = true;
      this.router.navigate(['task']);
    } else {
      this.isValid = false;
    }
  }

}
