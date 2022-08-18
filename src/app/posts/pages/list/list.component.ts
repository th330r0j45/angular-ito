import { Component, OnInit } from '@angular/core';
import { Post } from "src/app/posts/interfaces/posts";
import { PostsService } from "src/app/posts/services/posts.service";
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  posts: Post[] = [];
  page: number = 1;
  previousPageIndex: number = 1;
  PageIndex: number = 1;
  count: number = 0;
  tableSize: number = 10;
  pageSize: number = 10;
  tableSizes: any = [10, 20, 30];
  pageSizeOptions: any = [10, 20, 30];



  constructor(
    private postsService: PostsService,
    public _MatPaginatorIntl: MatPaginatorIntl

  ) { }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
    this._MatPaginatorIntl.itemsPerPageLabel = 'Posts por página';
    this._MatPaginatorIntl.firstPageLabel = 'Primera página';
    this._MatPaginatorIntl.lastPageLabel = 'Última página';
    this._MatPaginatorIntl.nextPageLabel = 'Siguiente';
    this._MatPaginatorIntl.previousPageLabel = 'Anterior';

  }
  onTableDataChange(event: any) {

    this.tableSize = event.pageSize;
    this.tableSizes = event.pageSizeOptions;
    this.page = event.pageIndex + 1;
    this.postsService.getPosts()
  }
  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    this.postsService.getPosts()
  }


}
