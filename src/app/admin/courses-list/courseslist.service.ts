import { Injectable } from '@angular/core';
import { Courses } from './courses';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseslistService {
  private baseURL  ="http://localhost:8081/api/courses/list-courses";

 private baseURdelete="http://localhost:8081/api/courses/"


  constructor(private httpClient: HttpClient) { }

  getCoursesList(): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(this.baseURL);
  }
  
  
  deletecourses(id:Number): Observable<any> {
    return this.httpClient.put(this.baseURdelete+id, id);
    }

}