import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';



@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent  implements OnInit{
  title ='All Courses';
  courses=  null as any;


  constructor(private httpclient : HttpClient , private coursesservice : CoursesService) {
    this.getCourses();
   }
  
  ngOnInit() {
    this.getCourses();
  }
  getCourses(){
    this.coursesservice.getCourses().subscribe(
      (resp)=>{
        console.log(resp);
       this.courses = resp ;
      },
      (err) => {
        console.log(err);
      }
    
    );
   
  }
  GoToCourse(){}
  getCurrentCourse(){

  }

}
  

