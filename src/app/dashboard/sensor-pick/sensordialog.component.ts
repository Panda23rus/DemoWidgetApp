import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
   selector: 'dialog-sensor-set-dialog',
   templateUrl: 'sensordialog.component.html',
   styleUrls: ['sensordialog.component.scss']
})
export class DialogSensorsSetDialogComponent {


   public touchUi = false;
   constructor(
      public dialogRef: MatDialogRef<DialogSensorsSetDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {sensors: Array<any>}) { }

   onNoClick(): void {
      this.dialogRef.close();
   }

}
