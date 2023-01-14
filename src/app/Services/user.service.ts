import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
const baseUrl = 'http://localhost:8081/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl+'/all');
  }
  getAllStudent(): Observable<any> {
    return this.http.get(baseUrl+'/all/student');
  }
  getAllInstructor(): Observable<any> {
    return this.http.get(baseUrl+'/all/instructor');
  }
  get(id:any ): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data:any): Observable<any> {
    return this.http.post(baseUrl+'/add', data);
  }
  update(id:any, data:User): Observable<any> {
    return this.http.put(`${baseUrl+'/update/'+id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl+'/delete/3'}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByusername(username:any): Observable<any> {
    return this.http.get(`${baseUrl}?username=${username}`);
  }
}
