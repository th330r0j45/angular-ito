import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/posts';

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
  getCommentsPorId(id:number): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}/comments`)
  }
  agregarPost(Post:Post): Observable<Post>{
    return this.http.post<Post>(`${this.baseUrl}/productos`,Post)
  }
  actualizarPost(Post:Post): Observable<Post>{
    return this.http.put<Post>(`${this.baseUrl}/productos/${Post.id}`,Post);
  }
  borrarPost(id:number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/productos/${id}`);
  }
  // Comments
  getProductos(id:number): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/comments/${id}`)
  }
  // getSugerencias(termino:string): Observable<Post[]>{
  //   return this.http.get<Post[]>(`${this.baseUrl}/Clientes/?q=${termino}&limit=6`)
  // }
  
}

