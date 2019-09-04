import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DogOwnerService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    street: new FormControl('', Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('', Validators.required),
    zipcode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
}
