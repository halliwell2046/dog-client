import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner-create/dog-owner.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-walker-profile",
  templateUrl: "./walker-profile.component.html",
  styleUrls: ["./walker-profile.component.css"]
})
export class WalkerProfileComponent implements OnInit {
  constructor(
    private walkerService: DogOwnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.walkerService.walkerForm.value);
  }
}
