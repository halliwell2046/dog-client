import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner.service";
import { DoggoService } from "src/app/doggo.service";
import { CodeNode } from 'source-list-map';

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent implements OnInit {
  statesArray: Object = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  constructor(
    private service: DogOwnerService,
    private doggoService: DoggoService
  ) { }

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.name = requested.data.firstName
      this.street = requested.data.address
      this.city = requested.data.city
      this.zipcode = requested.data.zip
      this.photoURL = requested.data.pic
      this.phoneNumber = requested.data.phoneNumber
    })

  }
  name: string
  street: string
  city: string
  phoneNumber: string
  photoURL: string
  zipcode: string

  onSubmit() {
    this.doggoService
      .addressUpdate(this.service.form.value)
      .subscribe((data: any) => {
        if (data.error === false) {
          console.log(data);
        } else {
          console.log(data);
        }
      });
    // console.warn(this.service.form.value);
  }
}
// Questions to ask Michael:
// How can I get make the option select in the Code.

// Red Valitators are throwing error when data has value in it.