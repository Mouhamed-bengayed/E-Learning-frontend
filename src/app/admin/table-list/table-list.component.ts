import { Component, OnInit } from '@angular/core';
import {User} from './user';


import { UserlistService } from './userlist.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

 users:User[];


  constructor(private UserlistService :UserlistService) {}

    ngOnInit(): void {
      this.getUser();
     
      }

      private getUser(){
      this.UserlistService.getUserList().subscribe(data => {
      this.users = data;
      });
      }
    
     
      
    }
           
       