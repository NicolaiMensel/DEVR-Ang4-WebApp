import { Injectable } from '@angular/core';
import {User} from "../user";
import {Headers, Http} from "@angular/http";

@Injectable()
export class UsersService {

  private apiUrl = 'http://127.0.0.1:9000/users';

  constructor(private http: Http) {
  }

  //Writes the given user to the API. Writes an error in the console of the browser if it fails.
  createUser(newUser: User, token: String): Promise<User> {
    return this.http
      .post(this.apiUrl, JSON.stringify(newUser),
        {headers: new Headers(token)})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }
  //return all topics from the database. Can be called even if a user is not authenticated.
  getUsers(): Promise<User[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: string): Promise<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  deleteUser(user: User, token: String): Promise<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete(url,
      {headers: new Headers(token)})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  updateUser(user: User, token: String): Promise<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: new Headers(token)})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  //Writes an error message in the browsers console.
  private handleError(error: any): Promise<any> {
    console.error('An error was made - ', error);
    return Promise.reject(error.message || error);
  }
}
