
import {Component, OnInit} from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  ngOnInit() {
    this.clients = this.storage.get("clients");
    console.log(this.clients);
  }

  OpenClient(client){
    
  }

}
