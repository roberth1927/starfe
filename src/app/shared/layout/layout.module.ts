import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HeaderDashboardComponent
  ]
})
export class LayoutModule { }
