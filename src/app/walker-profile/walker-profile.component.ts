import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner-create/dog-owner.service";
import { FormBuilder } from "@angular/forms";
import { DoggoService } from "../doggo.service";

@Component({
  selector: "app-walker-profile",
  templateUrl: "./walker-profile.component.html",
  styleUrls: ["./walker-profile.component.css"]
})
export class WalkerProfileComponent implements OnInit {
  constructor(
    private walkerService: DogOwnerService,
    private doggoService: DoggoService
  ) {}

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
    });
  }

  onSubmit() {
    console.log(this.walkerService.walkerForm.value);
    this.doggoService
      .profileUpdate(this.walkerService.walkerForm.value)
      .subscribe(
        (data: any) => {
          console.log("itworked");
        },
        err => console.log(err)
      );
  }
}
