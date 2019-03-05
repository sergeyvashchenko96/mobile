import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent {
  showSms = false;
  showDate = false;
  showFinal = false;
  sms = '';
  nameItem = '';
  names = [
    'Иван', 'Алекс', 'Настя'
  ];
  stateCtrl: FormControl;


  constructor() {
    this.stateCtrl = new FormControl();
  }

  submit() {
    this.showDate = true;
    this.showSms = false;
  }

  finish() {
    this.showDate = false;
    this.showFinal = true;
  }


  onBlurMethod() {
    if (this.names.includes(this.nameItem)) {
      return;
    } else {
      this.nameItem = '';
    }
  }
}
