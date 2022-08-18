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

  constructor() { }

  ngOnInit(): void {
  }

}
