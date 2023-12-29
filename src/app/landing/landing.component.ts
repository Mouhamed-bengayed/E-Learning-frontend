import { Component, OnInit } from '@angular/core';
import{MsgService}from'./msg.service'
import { Message } from '../admin/notifications/message';
import { CourseslistService } from '../admin/courses-list/courseslist.service';
import { Courses } from '../admin/courses-list/courses';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
	//images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  Message: Message=new Message();

  constructor(private MsgService :MsgService,private CourseslistService :CourseslistService) { }
  courses12:Courses[];

  
  ngOnInit(): void {
    this.getListeCourse();
    }

  saveMessage(){
    this.MsgService.createMessage(this.Message).subscribe( data =>{
    console.log(data);
    window.location.reload();
    },
    error => console.log(error));

    }


      private getListeCourse(){
      this.CourseslistService.getCoursesList().subscribe(data => {
      this.courses12 = data;
      });
      }

}
