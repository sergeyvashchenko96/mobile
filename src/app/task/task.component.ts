import {Component, OnInit} from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
@Injectable()
export class TaskComponent implements OnInit {
  project = {}; 
  project_c = 
    {
      name: 'Health Link',
      packages: [
         {
          name: "ДКТ",
          services: [
             {
               id: 1,
               name: "Консультування",
               count: "50",       
               done: "15"   
             },
             {
              id: 2,               
              name: "Тестування",
              count: "55",  
              done: "10" ,
              comment: "Тільки у сільскій місцевості"           
            },          
           ]
         },
         {
          name: "ДУ",
          services: [
             {
               id: 3,
               name: "Доведення до обліку",
               count: "20", 
               done: "11" , 
               comment: "Тільки не зареєстрованих пацієнтів"            
             },     
           ]
         },
         {
          name: "Супровід",
          services: [
             {
              id: 4,
              name: "Видача презервативів",
               count: "65",  
               done: "11" ,                        
             },
             {
              id: 5,
              name: "Обмін шприців",
              count: "155", 
              done: "32" ,                        
            },          
           ]
         },
      ]
    };
  
    meettings= [];

    meettings_c= [{
      date: '10-02-2019',
      startTime: '10-02-2019 12:14',
      endTime: '10-02-2019 12:32',
      services: [{
        id: 1,
        name: "Консультування",
        count: 3
      }]
    }];


  panelOpenStateChild=[];
  panelOpenStateSubChild=[];

  panelOpenState = true;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  ngOnInit() {  

    this.project = this.storage.get("project");
    console.log(this.project);
    if (!this.project) {
      this.storage.set('project', this.project_c);
      this.project = this.project_c;
    }

    this.meettings = this.storage.get("meettings");
    if (!this.meettings) {
        this.meettings = this.meettings_c;
        this.storage.set('meettings', this.meettings);  
    }

  }

  meetingCreate(pservice) {
    this.storage.set('current_meetting', 
    {         
      services:
      [
        {
        id: 1,
        name: pservice.name
      }]
    }
  );  
      
    console.log('current_meetting pushed')
  }

}


