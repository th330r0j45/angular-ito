import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/posts/interfaces/posts';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  termino: string = '';
  posts: Post[] = [];
  postSelecionado?: Post | undefined;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }
  buscando() {
    debugger
    this.postsService.getSugerencias(this.termino.trim())
      .subscribe(posts => this.posts = posts);
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.postSelecionado = undefined;
      return
    }

    const posts: Post = event.option.value
    this.termino = posts.title;

    this.postsService.getPostsPorId(posts.id).subscribe(posts => this.postSelecionado = posts);
  }

}
