import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner-create/dog-owner.service";
import { FormBuilder } from "@angular/forms";
import { DoggoService } from "../doggo.service";
import { GoogleService } from "../maps/google.service";

@Component({
  selector: "app-walker-profile",
  templateUrl: "./walker-profile.component.html",
  styleUrls: ["./walker-profile.component.css"]
})
export class WalkerProfileComponent implements OnInit {
  constructor(
    public walkerService: DogOwnerService,
    public doggoService: DoggoService,
    public googleService: GoogleService
  ) {}
  firstName: string;
  walkerLat: number;
  walkerLng: number;
  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      console.log(requested.data);

      this.walkerService.walkerForm.controls["city"].setValue(
        requested.data.city
      );
      this.walkerService.walkerForm.controls["street"].setValue(
        requested.data.address
      );
      this.walkerService.walkerForm.controls["state"].setValue(
        requested.data.state
      );
      this.walkerService.walkerForm.controls["zipcode"].setValue(
        requested.data.zip
      );
      this.walkerService.walkerForm.controls["picture"].setValue(
        requested.data.pic
      );
      this.walkerService.walkerForm.controls["phoneNumber"].setValue(
        requested.data.phoneNumber
      );
      this.walkerService.walkerForm.controls["bio"].setValue(
        requested.data.bio
      );
      this.firstName = requested.data.firstName;
    });
  }

  onSubmit() {
    console.log(this.walkerService.walkerForm.value);
    this.googleService
      .geoCoding(this.walkerService.walkerForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.walkerLat = data.results[0].geometry.location.lat;
        this.walkerLng = data.results[0].geometry.location.lng;
        sessionStorage.setItem("lat", this.walkerLat.toString());
        sessionStorage.setItem("lng", this.walkerLng.toString());
        this.doggoService
          .profileUpdate(
            this.walkerService.walkerForm.value,
            this.walkerLat,
            this.walkerLng
          )
          .subscribe(
            (data: any) => {
              console.log("itworked");
            },
            err => console.log(err)
          );
      });
  }
}
