import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post,Comment } from 'src/app/posts/interfaces/posts';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any = [];
  comments:any = [];
  post!: Post;

  constructor(
    private activedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.
    pipe( switchMap ( ({id}) => this.postsService.getCommentsPorId(id) ) )
    .subscribe(
      (response: any) => {
        this.comments = response;
        
      },
      (err:any) => {}
      
    );
    this.activedRoute.params.
    pipe( switchMap ( ({id}) => this.postsService.getPostsPorId(id) ) )
    .subscribe(
      (response: any) => {
        this.posts = response;
        
      },
      (err:any) => {}
      
    );
        
  }
  return(){
    this.router.navigate(['posts/list'])
  }
  

}
