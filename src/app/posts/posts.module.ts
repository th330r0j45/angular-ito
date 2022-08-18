import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';
import { ListComponent } from './pages/list/list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { FindComponent } from './pages/find/find.component';
import { PostComponent } from './pages/post/post.component';
import { AddComponent } from './pages/add/add.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    PostCardComponent,
    ConfirmModalComponent,
    FindComponent,
    PostComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class PostsModule { }
