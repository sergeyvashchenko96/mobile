import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients = [
    {
      name: 'Сергієнко Іван Васильович',
      number: '3806852145623   |   21.05.1994'
    },
    {
      name: 'Сергієнко Іван Васильович',
      number: '3806852145623   |   21.05.1994'
    },
    {
      name: 'Сергієнко Іван Васильович',
      number: '3806852145623   |   21.05.1994'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
