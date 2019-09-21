import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner.service";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-dog-profile",
  templateUrl: "./dog-profile.component.html",
  styleUrls: ["./dog-profile.component.css"]
})
export class DogProfileComponent implements OnInit {
  constructor(
    private service: DogOwnerService,
    private doggoService: DoggoService
  ) {}

  ngOnInit() {
    this.service.profileForm.controls["photourl"].setValue(
      "../../assets/dog-icon.png"
    );
  }

  onSubmit() {
    this.doggoService.petAdd(this.service.profileForm.value).subscribe(
      (data: any) => {
        this.doggoService.ownerPetData();
      },
      err => console.log(err)
    );
    // console.warn(this.service.form.value);
  }

  clearForm() {
    this.service.profileForm.reset();
    this.service.InitializeProfileFormGroup();
  }

  // test(){
  //   console.log(this.service.profileForm.value)
  // }
}
