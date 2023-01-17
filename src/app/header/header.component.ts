import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role';
import { AuthService } from '../services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user:User = new User();
  loggedinUser: any
  verif:boolean = false;
  role : any; 
  constructor(private authService : AuthService,private router:Router) {

   }

  ngOnInit(): void {
  }
  userLogin(){console.log(this.user)
    this.authService.loginUser(this.user).subscribe(data=>{return true},error=>{return false});
    
    }
    GetRole(){ return this.user.role}
    loggedin(){
     
      if (this.user.username!='' && this.user.password!='')
     this.verif=true ;
    return this.verif;
      
    }
    login () {
      window.location.href= 'http://localhost:8080/realms/master/protocol/openid-connect/auth?client_id=baha&redirect_uri=http://localhost:4200&state=322d2052-e7e7-4d49-b5bb-207473ab18f0&response_mode=fragment&response_type=code&scope=openid&nonce=9a4744e4-9a76-46e6-9846-995d661276f1&code_challenge=Scb6ekBOL_Zs5JvaKnO1KKGmHc8_VNhsU83YIVtoxc8&code_challenge_method=S256';
    }
    logOut() {
    this.user.username='' ;
    this.user.password='';
    this.router.navigate(["/login"]) ; 
    console.log(this.user)
    this.verif=false;
    }

}