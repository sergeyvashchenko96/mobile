import {Component, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
 
  items = [
    {
      header: 'Консультація - 26.01.2019',
      text: 'Сергієнко Василь Іванович',
      isDone: true
    },
    {
      header: 'Консультація - 26.01.2019',
      text: 'Сергієнко Василь Іванович',
      isDone: true
    },
    {
      header: 'Консультація - 26.01.2019',
      text: 'Сергієнко Василь Іванович',
      isDone: false
    },
    {
      header: 'Консультація - 26.01.2019',
      text: 'Сергієнко Василь Іванович',
      isDone: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
