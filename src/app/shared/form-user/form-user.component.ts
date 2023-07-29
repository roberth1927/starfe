import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  @Input() fetching = '';
  form!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {
    this.formInit()
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }


  formInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

}
