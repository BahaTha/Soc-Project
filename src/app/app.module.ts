import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { EditInstructorComponent } from './instructors/edit-instructor/edit-instructor.component';
import { ProfileInstructorComponent } from './instructors/profile-instructor/profile-instructor.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ManageInstructorsComponent } from './admin/manage-instructors/manage-instructors.component';
import { ManageCourseComponent } from './admin/manage-course/manage-course.component';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddInstructorComponent } from './admin/add-instructor/add-instructor.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { UserService } from './services/user.service';
import { SingleCourseComponent } from './single-course/single-course.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent, 
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
  SingleCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    InstructorsComponent,
    AddInstructorComponent,
    EditInstructorComponent,
    ProfileInstructorComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    DashboardComponent,
    ManageInstructorsComponent,
    ManageCourseComponent,
    ManageStudentsComponent,
    CategoriesComponent,
    AddStudentComponent,
    AllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

  ],
  providers: [OAuthService,UserService,AuthService],
  bootstrap: [AppComponent],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    HeaderComponent,
    FooterComponent,
],
})
export class AppModule { }
