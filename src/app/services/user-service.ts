import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/index';

@Injectable()
export class UserService  {

  constructor(private http: HttpClient) { }

  getById(id: number) {
        return this.http.get('/api/users/' + id);
  }

  create(user: User) {
        return this.http.post('/api/users', user);
  }

}
