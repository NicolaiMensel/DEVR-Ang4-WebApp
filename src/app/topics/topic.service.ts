import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Topic} from './topic';

@Injectable()
export class TopicService {

  private apiUrl = 'http://127.0.0.1:9000/topics';

  constructor(private http: Http) {
  }

  //Takes a topic, writes it to the API. Writes an error in the console of the browser if it fails.
  create(newTopic: Topic): Promise<Topic> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem('token').substring(12, 158));
return this.http
  .post(this.apiUrl, JSON.stringify(newTopic),
  {headers: headers})
  .toPromise()
  .then(res => res.json().data as Topic)
  .catch(this.handleError);
  }

  //return all topics from the database. Can be called even if a user is not authenticated.
  getTopics(): Promise<Topic[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Topic[])
      .catch(this.handleError);
  }

  //returns a topic with matching id from the database, if it exists. Else writes an error in the browsers console.
  getTopic(id: string): Promise<Topic> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Topic)
      .catch(this.handleError);
  }

  //Updates the topic in the database with matching id if any. Else writes an error in the browsers console.
  update(topic: Topic): Promise<Topic> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem('token').substring(12, 158));
    const url = `${this.apiUrl}/${topic.id}`;
    return this.http
      .put(url, JSON.stringify(topic), {headers: headers})
      .toPromise()
      .then(() => topic)
      .catch(this.handleError);
  }

  //Writes an error message in the browsers console.
  private handleError(error: any): Promise<any> {
    console.error('An error was made - ', error);
    return Promise.reject(error.message || error);
  }
}
