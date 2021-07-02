import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  profileFormGroup: FormGroup;
  formStatus: boolean;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }


  initForm() {
    this.profileFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.array([this.createAddress()])
    });
  }

  get profile() {
    return this.profileFormGroup.controls;
  }

  get address(): FormArray {
    return this.profileFormGroup.get('address') as FormArray;
  }

  createAddress(): FormGroup {
    return this.fb.group({
      city: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  addAddress(): void {
    this.address.push(this.createAddress())
  }

  removeAddress(indexRemove: number) {
    this.address.removeAt(indexRemove);
  }

  formSubmit() {
    this.formStatus = true;
    if (this.profileFormGroup.valid) {
      console.log(this.profileFormGroup.value);
    }
  }

  ngOnInit(): void {
  }

}
