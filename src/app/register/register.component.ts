import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role';
import { User } from '../user';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User = new User();
  roles= ['student','instructor'];
  selected="student";
  constructor(private registerService : RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  userRegister(){console.log(this.user)
  this.registerService.registerUser(this.user).subscribe(data=>{
    alert("Successfuly registred , welcome "+this.user.username.toString()) ;
    this.router.navigate(["/"])},error=>alert("Sorry user already exist"));

  };

}
