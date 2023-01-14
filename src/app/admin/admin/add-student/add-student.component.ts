import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  user:User = new User();
  roles= ['student'];
  selected="student";
  constructor(private registerService : RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  userRegister(){
    console.log(this.user)
    this.registerService.registerUser(this.user).subscribe(data=>{
    alert("Successfuly registred , welcome "+this.user.username.toString()) ;
    this.router.navigate(["/admin"])},error=>alert("Sorry user already exist"));

  };
  onReset() {
    return;
}


}
