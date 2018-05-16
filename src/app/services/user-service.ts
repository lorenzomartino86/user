import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/index';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class UserService  {

   url = 'http://localhost:3000/users';

   constructor(private http: HttpClient) { }

   getAll(): Observable<any> {
      return this.http.get(this.url + '/');
   }

   getById(id: number): Observable<any> {
       return this.http.get(this.url + '/' + id);
   }

   create(user: User): Observable<any> {
      return this.http.post(this.url, user);
   }

}
