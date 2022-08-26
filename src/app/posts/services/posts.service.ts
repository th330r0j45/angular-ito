import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/posts';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http:HttpClient
  ) {  }

  //POSTS
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
  }
  getPostsPorId(id:number): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`)
  }
  getCommentsPorId(id:number): Observable<Comment>{
    return this.http.get<Comment>(`${this.baseUrl}/posts/${id}/comments`)
  }
  agregarPost(Post:Post): Observable<Post>{
    return this.http.post<Post>(`${this.baseUrl}/posts`,Post)
  }
  actualizarPost(Post:Post): Observable<Post>{
    return this.http.put<Post>(`${this.baseUrl}/posts/${Post.id}`,Post);
  }
  borrarPost(id:number): Observable<Post>{
    return this.http.delete<Post>(`${this.baseUrl}/posts/${id}`);
  }
  // Comments
  getCreadorPost(id:number): Observable<Users>{
    return this.http.get<Users>(`${this.baseUrl}/users/${id}`)
  }
  getSugerencias(termino:string): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts?userId=${termino}`)
  }
}

