import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/posts/interfaces/posts';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Post
  ) { }

  ngOnInit(): void {
  }
  delete(){
    this.dialogRef.close(true)
  }
  
  cancel(){
    this.dialogRef.close();
  }

}
