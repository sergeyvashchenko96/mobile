import {Component, ViewChild, OnInit} from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
 
  meettings = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  ngOnInit() {
    this.meettings = this.storage.get("meettings");

  }
  openMeetting(meetting){
    this.storage.set("current_meetting",meetting); 
  }
}
