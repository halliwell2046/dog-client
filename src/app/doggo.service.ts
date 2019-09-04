import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DoggoService {
  userLogin: string = "http://localhost:3000/user/login";
  userSignup: string = "http://localhost:3000/user/signup";
  userUpdate: string = "http://localhost:3000/user/update/1";
  ownerAddingPet: string;

  //SIGNUP
  // var firstName = req.body.user.firstName;
  //     var lastName = req.body.user.lastName;
  //     var email = req.body.user.email;
  //     var pass = req.body.user.password;
  //     var accountType = req.body.user.accountType;

  //LOGIN
  // .user.email
  // .user.password

  constructor(private http: HttpClient) {}

  addressUpdate(addressData) {
    const body = {
      data: {
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zipcode: addressData.zipcode,
        phoneNumber: addressData.phoneNumber
      }
    };

    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put(this.userUpdate, body, { headers: reqHeaders });
  }
  petAdd(petData) {
    const body = {
      data: {
        owner: petData.street,
        petName: petData.city,
        petPic: petData.state,
        breed: petData.zipcode,
        age: petData.phoneNumber,
        weight: petData.zipcode,
        gender: petData.zipcode
      }
    };

    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put(this.userUpdate, body, { headers: reqHeaders });
  }
}
