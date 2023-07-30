import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../../features/services/users.service';
import { FormUserComponent } from 'src/app/shared/form-user/form-user.component';
import { MatStepper } from '@angular/material/stepper';
import { SignatureUserComponent } from 'src/app/shared/signature-user/signature-user.component';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.scss'],
})
export class FormHomeComponent implements OnInit {

@ViewChild('userForm') userForm!: FormUserComponent
@ViewChild('stepper') stepper!: MatStepper
@ViewChild('signatureUser') signatureUser!: SignatureUserComponent

  isLinear = false;
  isEditable = false;
  uid: string = '';

  fetching: any = 'iddle';
  constructor(
    private userService: UsersService,
  ) {

  }

  ngOnInit(){ }

  handleFormSubmit(formData: any) {
    this.uid = '';
    this.fetching = 'pending';
    this.userService.postUser(formData).subscribe(
      (r) => {
        this.fetching = 'succeded';
        this.uid = r.data._id
        this.stepper.next()
        this.userForm.formInit()
      },
      (err) => {
        this.fetching = 'rejected';
      }
    );
  }

  handleSignature(file: File) {
    this.userService
      .uploadSignature(this.uid, file)
      .subscribe(
        (response) => {
          this.stepper.next();
          this.signatureUser.clearSignPad();
        },
        (error) => {
          console.error('Error al enviar la imagen al backend:', error);
        }
      );
  }
}
