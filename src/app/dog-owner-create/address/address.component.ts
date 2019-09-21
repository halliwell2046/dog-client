import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner.service";
import { DoggoService } from "src/app/doggo.service";
import { CodeNode } from "source-list-map";
import { GoogleService } from "src/app/maps/google.service";

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
  ownerLat: number;
  ownerLng: number;
  name: string;

  constructor(
    public service: DogOwnerService,
    public doggoService: DoggoService,
    public googleService: GoogleService
  ) {}

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.service.form.controls["city"].setValue(requested.data.city);
      this.service.form.controls["street"].setValue(requested.data.address);
      this.service.form.controls["state"].setValue(requested.data.state);
      this.service.form.controls["zipcode"].setValue(requested.data.zip);
      this.service.form.controls["picture"].setValue(requested.data.pic);
      this.service.form.controls["phoneNumber"].setValue(
        requested.data.phoneNumber
      );
      this.name = requested.data.firstName;
    });
  }

  onSubmit() {
    this.googleService
      .geoCoding(this.service.form.value)
      .subscribe((data: any) => {
        this.ownerLat = data.results[0].geometry.location.lat;
        this.ownerLng = data.results[0].geometry.location.lng;
        sessionStorage.setItem("lat", this.ownerLat.toString());
        sessionStorage.setItem("lng", this.ownerLng.toString());
        this.doggoService
          .profileUpdate(this.service.form.value, this.ownerLat, this.ownerLng)
          .subscribe((addressData: any) => {});
      });

    // console.warn(this.service.form.value);
  }
}
