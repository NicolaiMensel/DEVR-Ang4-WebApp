import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";
@Injectable()
export class AuthService {
private token: String;
private apiUrl = 'http://127.0.0.1:9000/auth';

  constructor(private http: Http) {
  }

  login(username: String, password: String): Observable<String> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return this.http.post(this.apiUrl,null,{headers: headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('token', JSON.stringify({token: token }));
          return this.token;
        }
      });
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('token');
  }
}
