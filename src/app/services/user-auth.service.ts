import { User } from './../classes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient) {}

  url = 'http://flash-cards-rest-api.herokuapp.com/api/';
  url2='https://sokobackend.herokuapp.com/app/api/'

  token = '1eef31a091e8582786d3ab68db0e7104d0ad2530';
  edu='e88ee03fb306c1e1f4757465bc514e77de1f740c'
  token2='5837d9aae9fb19966fc5d0dd81219ad27d024957';

  // create new user
  createUser(username: string, email: string, password: string) {
    return this.http.post(
      this.url2 + 'users/create/',
      {
        username: username,
        password: password,
        email: email,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token2,
        },
      }
    );
  }


  // login user
  loginUser(username: string, password: string) {
    return this.http.post(
      this.url2 + 'auth/login/',
      {
        username: username,
        password: password,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token2,
        },
      }
    );
  }
}
