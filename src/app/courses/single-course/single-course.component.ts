import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';


@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Course:Course= new Course ();
}
