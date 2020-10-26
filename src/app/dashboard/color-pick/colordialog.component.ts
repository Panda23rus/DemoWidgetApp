import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';

@Component({
   selector: 'dialog-color-set-dialog',
   templateUrl: 'colordialog.component.html',
})
export class DialogColorSetDialogComponent {


   public touchUi = false;
   constructor(
      public dialogRef: MatDialogRef<DialogColorSetDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {color: ThemePalette}) { }

   onNoClick(): void {
      this.dialogRef.close();
   }

}
