import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: "root"
})
export class DoggoService {

  userID:string = '1'
  userLoginURL: string = "http://localhost:3000/user/login";
  userSignupURL: string = "http://localhost:3000/user/signup";
  userUpdateURL: string = "http://localhost:3000/user/update/1";
  ownerAddingPetURL: string ='http://localhost:3000/owner/create';
  
  getPetURL: string =`http://localhost:3000/owner/${this.userID}`
  deletePet: string = 'http://localhost:3000/owner/delete/'


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
  // petDataSource: Object = []

  petDataSource = new BehaviorSubject <any>([])
  cast = this.petDataSource.asObservable()

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
    return this.http.put(this.userUpdateURL, body, { headers: reqHeaders });
  }
  petAdd(formData) {
    const body = {
      data: {
        userId: '1',
        petName: formData.petName,
        image: formData.photourl,
        breed: formData.breed,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        bio: formData.bio
      }
    };

    console.log(formData.gender)

    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.ownerAddingPetURL, body, { headers: reqHeaders });
  }


  ownerPetData() {
console.log('😀')
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.get(this.getPetURL, { headers: reqHeaders })
    // .subscribe(pets=> this.petDataSource = pets)
    .subscribe(pet => {
      console.log(pet)
      this.petDataSource.next(pet)
    })
  }


deletePetData(id) {
console.log('this works')
  const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
   this.http.delete(this.deletePet+id, { headers: reqHeaders }).subscribe(() => {
    console.log('this works2')
    this.ownerPetData()
  })

}
}