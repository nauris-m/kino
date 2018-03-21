import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'my-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>) {
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
