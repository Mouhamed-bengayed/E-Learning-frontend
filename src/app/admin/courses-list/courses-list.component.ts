import { Component, OnInit } from '@angular/core';


import { CourseslistService } from './courseslist.service';
import { Courses } from './courses';

@Component({
  selector: 'app-table-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

 courses:Courses[];
 

  constructor(private  CourseslistService:CourseslistService) {}

    ngOnInit(): void {
      this.getListeCourse();
      }

      private getListeCourse(){
      this.CourseslistService.getCoursesList().subscribe(data => {
      this.courses = data;
      });
      }


      deletecourses(courses: Courses): void {
        this.CourseslistService.deletecourses(courses.id).subscribe(
          () => {

            console.log('Utilisateur delete avec succès.');
           // window.location.reload();
          },
          (error) => {
            console.error('Une erreur s\'est produite lors de l\'activation :', error);
            // Gérer l'erreur d'activation
          }
        );
      }
    }
