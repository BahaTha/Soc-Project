import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authService : AuthService,private router:Router) {
    
  }
  ngOnInit() : void {
  }
userLogin(){console.log(this.user)
this.authService.loginUser(this.user).subscribe(data=>{alert("Logged in as "+this.user.username.toString()); 
this.router.navigate(["/"]) ; 
},error=>alert("Please verify your details"));

}
currentUser(){return(this.user.username)};


}
