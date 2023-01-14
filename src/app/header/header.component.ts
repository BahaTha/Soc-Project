import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../services/auth.service';
import { authCodeFlowConfig } from '../sso-config';
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
  constructor(private oauthService : OAuthService) { }

  ngOnInit(): void {
  }
   
  configureSingleSignOn()
  {this.oauthService.configure(authCodeFlowConfig)
   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login(){

    this.oauthService.initCodeFlow();
  }
    loggedin(){
     
      if (this.user.username!='' && this.user.password!='')
     this.verif=true ;
    return this.verif;
      
    }
    logOut() {
    this.oauthService.logOut();
    }

}
