import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Comment, Post } from 'src/app/posts/interfaces/posts';
import { PostsService } from 'src/app/posts/services/posts.service';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  comments: Comment[] = [];

  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
  posts: Post[] = [];


  constructor(
    private postsService:PostsService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private snackBar:MatSnackBar,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe( posts => this.posts = posts);
    console.log(this.posts);

    if (!this.router.url.includes('edit')) {
      return
    }

    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.postsService.getPostsPorId(id))
    )
    .subscribe(post => this.post = post)
    
  }
  save(){
    if (this.post.title.trim().length == 0) {
      return;
    }
    console.log(this.post.id);
    
    if (this.post.id) {
      //Update
      this.postsService.actualizarPost(this.post)
      .subscribe(post => {this.showSnackbar('Posts Actualizado')})
      this.router.navigate(['/posts/list',])
    }else{
      //Create
      console.log(this.post);
      this.postsService.agregarPost(this.post)
      .subscribe(post => {this.showSnackbar('Posts Creado')})
      this.router.navigate(['/posts/list',])
      
    }
    
  }
  deletePost(){

    const dialog = this.dialog.open(ConfirmModalComponent,{

      width:'250px',
      data:this.post
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.postsService.borrarPost(this.post.id!)
        .subscribe(post => {this.showSnackbar('Posts Eliminado')})
      this.router.navigate(['/posts/list',])
      }
    })
    // dialog.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.postsService.borrarPost(this.post.id!)
    //     .subscribe((resp) => {
    //       this.router.navigate(['/posts'])
    //     })
    //   }
    // })

  }
  showSnackbar(message:string){

    this.snackBar.open(message,'ok!',{
      duration:2500
    });

  }

}
