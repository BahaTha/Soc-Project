import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { ManageCourseComponent } from './admin/manage-course/manage-course.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';
import { ManageInstructorsComponent } from './admin/manage-instructors/manage-instructors.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AddInstructorComponent } from './admin/add-instructor/add-instructor.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { SingleCourseComponent } from './single-course/single-course.component';

const routes: Routes = [  
  { path : '/home' ,component: HomepageComponent},
  {path : '/courses', component: CoursesComponent},
  {path : '/instructors', component: InstructorsComponent},
  {path : '/admin', component: AdminComponent},
  {path : '/admin/instructors/add', component: AddInstructorComponent},
  {path : '/admin/instructors/manage', component: ManageInstructorsComponent},
  {path : '/admin/students/add', component: AddStudentComponent},
  {path : '/admin/students/manage', component: ManageStudentsComponent},
  {path : '/admin/courses/add', component: AddCourseComponent},
  {path : '/admin/courses/manage', component: ManageCourseComponent},
  {path : '/admin/categories', component: CategoriesComponent},
  {path : '', component: HomepageComponent},
  {path : '/login', component: LoginComponent},
  {path : '/register', component: RegisterComponent},
  {path : '/Courses', component: AllCoursesComponent,children: [

    { path: ':id', component: AllCoursesComponent },
  

  ]},
  {path : '/Course/:id', component: SingleCourseComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
