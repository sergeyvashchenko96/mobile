import {Inject, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';


import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent {
  meetting: any;
  project: any;
  showSms = true;
  showDate = false;
  showFinal = false;
  sms = '';
  nameItem = '';
  speciality = '';
  send = false;
  counter = 1;
  names = [
    'Іванов Іван Іванович', 'Петров Петро Петрович', 'Сидоров Сидор Сидорович'
  ];
  specialitys = [];
  stateCtrl: FormControl;
  specialityCtrl: FormControl;
  startTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  });
  endTime = '';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.stateCtrl = new FormControl();
    this.specialityCtrl = new FormControl();
  }

  submit() {
    this.showDate = true;
    this.showSms = false;
  }

  finish() {
    // this.showDate = false;
    //     //     // this.showFinal = true;
    this.endTime = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric'
    });

  }


  onBlurMethod() {
    if (this.names.includes(this.nameItem)) {
      return;
    } else {
      this.nameItem = '';
    }
  }

  onBlurMethodSpeciality() {
    if (this.specialitys.includes(this.speciality)) {
      return;
    } else {
      this.speciality = '';
    }
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  increment() {
    this.counter++;
  }

  ngOnInit() {
    this.meetting = this.storage.get('current_meetting');


    this.project = this.storage.get('project');
    this.project = <any>this.project;
      // @ts-ignore
    for (let i = 0; i < <any>this.project.packages.length; i++) {
      for (let j = 0; j < this.project.packages[i].services.length; j++) {
        this.specialitys.push(this.project.packages[i].services[j].name + '(' + this.project.packages[i].name + ')');
      }
    }
  }


  AddService(event, serv) {
    console.log('service added');
    console.log(serv);
    event.stopPropagation();
    if (serv != '') {
      this.meetting.services.push({name: serv});
      this.speciality = '';
    }
  }

  deleteService(pservice) {
    this.meetting.services.splice(pservice, 1);
  }

}
