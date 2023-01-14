import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8081/user/login";

  constructor(private httpClient:HttpClient) { }
  
    loginUser(user:User):Observable<object> {
      sessionStorage.setItem('username',user.username);
      return this.httpClient.post('http://localhost:8081/user/login',user);
     
  }
  currentUser():Observable<object> {
    return this.httpClient.get('http://localhost:8081/user/loggeduser');
    
}
logOut() {
  sessionStorage.removeItem('username')
}

}

  
