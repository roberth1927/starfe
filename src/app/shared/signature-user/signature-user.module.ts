import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatureUserComponent } from './signature-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SignatureUserComponent],
  imports: [CommonModule,
    MatButtonModule, MatIconModule

  ],
  exports: [SignatureUserComponent],
})
export class SignatureUserModule {}
