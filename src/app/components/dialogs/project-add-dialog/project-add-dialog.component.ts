import { Component, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectAddDialogData } from './project-add-dialog.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { User } from 'src/app/shared/models/user.model';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-project-add-dialog',
  templateUrl: './project-add-dialog.component.html',
  styleUrls: ['./project-add-dialog.component.css'],
})
export class ProjectAddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectAddDialogData
  ) {
    if (data.currentUser) {
      const currentUserIndex = data.users.findIndex(
        (u) => u.id === data.currentUser?.id
      );
      if (currentUserIndex > -1) {
        data.project?.users.push(data.currentUser);
      }
    }
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public add(event: MatChipInputEvent): void {
    const input = event.chipInput?.inputElement;
    if (event.value) {
      const value = event.value.trim();
      const user = this.data.users.find((u) => u.name === value);

      // add user
      if (user) {
        if (this.data.project) {
          this.data.project.users.push(user);
        }
      }
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public remove(user: User): void {
    if (this.data.project) {
      const index = this.data.project.users.indexOf(user);

      if (index >= 0) {
        this.data.project.users.splice(index, 1);
      }
    }
  }
}
