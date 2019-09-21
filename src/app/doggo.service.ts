import { APIURL } from "../environments/environment.prod";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { FormsModule } from "@angular/forms";
@Injectable({
  providedIn: "root"
})
export class DoggoService {
  userDataInfo: any = [];
  userID: string = "";
  userLoginURL: string = `${APIURL}/user/login`;
  userSignupURL: string = `${APIURL}/user/signup`;
  userUpdateURL: string = `${APIURL}/owner/address`;
  ownerAddingPetURL: string = `${APIURL}/owner/create`;
  getPetURL: string = `${APIURL}/owner/`;
  deletePet: string = `${APIURL}/owner/delete/`;
  ownerRecentRequestURL: string = `${APIURL}/walker/owner-requests/`;
  walkerProfile: string = `${APIURL}0/owner/`;
  serviceRequestCreateURL: string = `${APIURL}/walker/create-request/`;

  userProfileURL: string = `${APIURL}/owner/userinfo`;

  addingReviewURL: string = `${APIURL}/walker/update-request/`;

  walkerAcceptedRequestsURL: string = `${APIURL}/walker/accepted-requests/`;
  walkerPendingRequestsURL: string = `${APIURL}/walker/pending-requests/`;

  walkerAcceptButtonURL: string = `${APIURL}/walker/walker-update-request/`;

  zipcodeServerURL: string = `${APIURL}/zipcode/check`;

  ownerDeletesRequestURL: string = `${APIURL}/walker/delete/`;

  constructor(public http: HttpClient) {}

  // BEHAVIOR SUBJECTS
  petDataSource = new BehaviorSubject<any>([]);
  petData = this.petDataSource.asObservable();

  sessionTokenSource = new BehaviorSubject<any>("");
  sessionToken = this.sessionTokenSource.asObservable();
  // Owner Pending Requests
  ownerPendingRequestSource = new BehaviorSubject<any>([]);
  ownerPendingRequestData = this.ownerPendingRequestSource.asObservable();
  updateOwnerPendingRequestData(data: any) {
    this.ownerPendingRequestSource.next(data);
  }
  walkerAcceptedSource = new BehaviorSubject<any>([]);
  walkerAcceptedData = this.walkerAcceptedSource.asObservable();
  walkerUpdateAcceptedData(data: any) {
    this.walkerAcceptedSource.next(data);
  }

  walkerPendingSource = new BehaviorSubject<any>([]);
  walkerPendingData = this.walkerPendingSource.asObservable();
  walkerUpdatePendingData(data: any) {
    this.walkerPendingSource.next(data);
  }
  // Walkers in the Owners Zipcode
  zipcodeSource = new BehaviorSubject<any>([]);
  zipcodeData = this.zipcodeSource.asObservable();
  UpdateWalkersInAreaZipcodeData(data: any) {
    this.zipcodeSource.next(data);
  }
  //The current requested walk
  requestingWalkSource = new BehaviorSubject<any>([]);
  requestingWalkData = this.requestingWalkSource.asObservable();
  updateRequestingWalkerData(data: any) {
    this.requestingWalkSource.next(data);
  }
  //TOKEN ITEMS
  checkToken() {
    if (sessionStorage.getItem("token")) {
      this.sessionTokenSource.next(sessionStorage.getItem("token"));
    }
  }
  logOut() {
    this.sessionTokenSource.next(undefined);
  }
  // PROFILE OWNER
  profileUpdate(addressData, lat, lng) {
    const body = {
      data: {
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zipcode: addressData.zipcode,
        phoneNumber: addressData.phoneNumber,
        picture: addressData.picture,
        bio: addressData.bio,
        lat: lat,
        lng: lng
      }
    };
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.put(this.userUpdateURL, body, { headers: reqHeaders });
  }
  //PET OWNER ADDING PET
  petAdd(formData) {
    const body = {
      data: {
        petName: formData.petName,
        image: formData.photourl,
        breed: formData.breed,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        bio: formData.bio
      }
    };
    console.log(formData.gender);
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.post(this.ownerAddingPetURL, body, {
      headers: reqHeaders
    });
  }
  // PET OWNER GETTING PETS FOR TABLE
  ownerPetData() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http
      .get(this.getPetURL, { headers: reqHeaders })
      .subscribe(pet => {
        this.petDataSource.next(pet);
      });
  }
  //DELETING PET DATA
  deletePetData(id) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    this.http
      .delete(this.deletePet + id, { headers: reqHeaders })
      .subscribe(() => {
        this.ownerPetData();
      });
  }
  /// signup/login
  userLogin(formData) {
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const body = {
      user: {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstname,
        lastName: formData.lastname,
        accountType: formData.accountType
      }
    };
    return this.http.post(this.userLoginURL, body, {
      headers: reqHeaders
    });
  }

  userSignup(formData) {
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const body = {
      user: {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstname,
        lastName: formData.lastname,
        accountType: formData.accountType
      }
    };
    return this.http.post(this.userSignupURL, body, {
      headers: reqHeaders
    });
  }
  // PULLING REQUESTS THAT OWNER MADE

  addReview(data) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    const body = {
      data: {
        reviewTitle: data.reviewTitle,
        // rating: data.rating,
        review: data.review
      }
    };
    return this.http.put(this.addingReviewURL + data.id, body, {
      headers: reqHeaders
    });
  }

  //OWNER CANCELS REQUEST

  cancelRequest(id) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });

    return this.http.delete(`${this.ownerDeletesRequestURL}${id}`, {
      headers: reqHeaders
    });
  }

  // OWNER INFO FOR SIDEBAR
  getUserInfo() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.get(this.userProfileURL, { headers: reqHeaders });
  }

  // OWNER RECENT REQUESTS
  getOwnerRecentRequests() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.get(this.ownerRecentRequestURL, { headers: reqHeaders });
  }

  // OWNER BOOKING WALKER

  bookTheWalker(data) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    let body = {
      data: {
        dateRequested: this.requestingWalkSource.value[0].dateRequested,
        timeRequested: this.requestingWalkSource.value[0].timeRequested,
        dogs: this.requestingWalkSource.value[0].dogs,
        walkerID: data
      }
    };
    return this.http.post(this.serviceRequestCreateURL, body, {
      headers: reqHeaders
    });
  }
  //WALKER SPECIFIC AREA

  // WALKER INFO FOR SIDEBAR
  walkerData() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.get(this.walkerProfile, { headers: reqHeaders });
  }
  //WALKER PENDING REQUEST TABLE
  getPendingWalkerRequest() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.get(this.walkerPendingRequestsURL, {
      headers: reqHeaders
    });
  }

  //WALKER USED ACCEPT BUTTON ON PENDING

  walkerAccepts(data: number) {
    let body = {
      data: {
        isAccepted: true
      }
    };
    let newURL = `${this.walkerAcceptButtonURL}${data}`;

    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.put(newURL, body, {
      headers: reqHeaders
    });
  }

  //WALKER USING DECLINE BUTTON

  walkerDeclines(data: number) {
    let body = {
      data: {
        walkerId: null
      }
    };
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.put(this.walkerAcceptButtonURL + data, body, {
      headers: reqHeaders
    });
  }

  // WALKER ACCEPTED TABLE

  //WALKER PENDING REQUEST TABLE
  getAcceptedWalkerRequest() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.get(this.walkerAcceptedRequestsURL, {
      headers: reqHeaders
    });
  }

  //WALKER MARKS IT COMPLETE

  walkerMarksComplete(data) {
    let body = {
      data: {
        isCompleted: true
      }
    };
    let newURL = `${this.walkerAcceptButtonURL}${data}`;

    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.put(newURL, body, {
      headers: reqHeaders
    });
  }
  //WALKER MARKS IT CANCELED

  walkerMarksCancel(data) {
    let body = {
      data: {
        isCompleted: false,
        isAccepted: false,
        walkerID: null
      }
    };
    let newURL = `${this.walkerAcceptButtonURL}${data}`;

    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    return this.http.put(newURL, body, {
      headers: reqHeaders
    });
  }

  checkZipcodes(zipcodeRequested: string) {
    let api = `https://secure.geonames.org/findNearbyPostalCodesJSON?postalcode=${zipcodeRequested}&country=US&radius=10&username=rvanar`;
    return this.http.get(api);
  }

  zipCodeServer(zipcodes) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionTokenSource.value
    });
    let body = { zipcode: zipcodes };
    return this.http.post(this.zipcodeServerURL, body, {
      headers: reqHeaders
    });
  }
}
