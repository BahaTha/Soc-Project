import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl+'/all');
  }
  get(id:any ): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data:any): Observable<any> {
    return this.http.post(baseUrl+'/add', data);
  }
  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl+'/delete'}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByname(name:any): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
