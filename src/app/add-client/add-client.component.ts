import {Component, OnInit} from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  client = {};

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }


  ngOnInit() {
  }

  saveClient() {
    console.log('saving');
    let clients = this.storage.get('clients');
    clients.push(this.client);
    this.storage.set('clients', clients);

  }

}
