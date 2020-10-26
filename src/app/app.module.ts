import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogColorSetDialogComponent } from './dashboard/color-pick/colordialog.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSensorsSetDialogComponent } from './dashboard/sensor-pick/sensordialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogColorSetDialogComponent,
    DialogSensorsSetDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    NgxMatColorPickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
