import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/posts`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }

  getPostsByUser(userId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${userId}/posts`);
  }

  getCommentsByPost(postId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/posts/${postId}/comments`);
  }
}