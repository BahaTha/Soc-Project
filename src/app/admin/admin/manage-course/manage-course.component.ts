import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  constructor(private userService: UserService, private router:Router) { }
  ngOnInit(): void {
    this.retrieveusers();
  }
  roles= ['student','student'];
  selected="student";
  users: any;
  currentuser:User = new User();
  currentIndex = -1;
  username = '';
  public editpressed:boolean=false;
  user:User = new User();
  validateUser(u:User){
    console.log(u);
  this.editpressed=!this.editpressed;

  }
  modifyUser(u:User){
    this.user=u;
    this.editpressed=true;
    
  }
  deleteUser(u:User){
    console.log(u);
    this.userService.delete(u.id);
    this.refreshList();
  }
  updateName() {
    console.log(this.user.emailId);
    this.user= this.user;
    console.log(this.user);
    
  }
  onReset(){
    this.editpressed=false;
  }
  retrieveusers(): void {
    this.userService.getAllStudent()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveusers();
    this.currentuser = new User();
    this.currentIndex = -1;
  }
  setActiveuser(user: User, index: any): void {
    this.currentuser = user;
    this.currentIndex = index;
  }
  removeAllusers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveusers();
        },
        error => {
          console.log(error);
        });
  }
  searchusername(): void {
    this.userService.findByusername(this.username)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  userUpdate(){
    console.log(this.user)
    this.userService.update(this.user.id, this.user);

  }
}
