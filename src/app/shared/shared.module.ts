import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    ErrorPageComponent,

  ]
})
export class SharedModule { }
