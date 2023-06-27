import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'posts',
    loadChildren: () => import ('./posts/posts.module').then ( m => m.PostsModule),
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'posts'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
