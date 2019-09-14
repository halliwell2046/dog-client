import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
 
@Injectable({
  providedIn: "root"
})
export class DogOwnerService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    street: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    zipcode: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(10)
    ]),
    picture: new FormControl("")
  });

  profileForm: FormGroup = new FormGroup({
    petName: new FormControl("", Validators.required),
    breed: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    weight: new FormControl("", Validators.required),
    photourl: new FormControl("", Validators.required),
    bio: new FormControl("", Validators.required),
    gender: new FormControl("")
  });

  InitializeProfileFormGroup() {
    this.profileForm.setValue({
      petName: "",
      breed: "",
      age: "",
      weight: "",
      photourl: "",
      bio: "",
      gender: ""
    });
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    accountType: new FormControl("", Validators.required)
  });

  walkerForm: FormGroup = new FormGroup({
    street: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    zip: new FormControl("", Validators.required),
    phonenumber: new FormControl("", Validators.required),
    bio: new FormControl(""),
    photourl: new FormControl("")
  });
}
