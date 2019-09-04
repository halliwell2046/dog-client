import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoggoService {
  userLogin: string = "http://localhost:3000/user/login"
  userSignup: string = 'http://localhost:300/user/signup'

//SIGNUP
// var firstName = req.body.user.firstName;
//     var lastName = req.body.user.lastName;
//     var email = req.body.user.email;
//     var pass = req.body.user.password;
//     var accountType = req.body.user.accountType;

//LOGIN
// .user.email
// .user.password

  constructor() { }
}
