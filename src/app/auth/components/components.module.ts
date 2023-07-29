import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { FormUserModule } from 'src/app/shared/form-user/form-user.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SignatureUserModule } from 'src/app/shared/signature-user/signature-user.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    BannerHomeComponent,
    FormHomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormUserModule,
    MatButtonModule,
    HttpClientModule,
    SignatureUserModule,
    RouterModule

  ],
  exports:[
    BannerHomeComponent,
    FormHomeComponent
  ]
})
export class ComponentsModule { }
