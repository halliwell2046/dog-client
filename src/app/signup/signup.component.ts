import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner-create/dog-owner.service";
import { DoggoService } from "../doggo.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    public service: DogOwnerService,
    public doggoService: DoggoService
  ) {}
  ngOnInit() {}
  onSubmit() {
    this.doggoService
      .userSignup(this.service.signupForm.value)
      .subscribe((data: any) => {
        sessionStorage.setItem("token", data.sessionToken);
        this.doggoService.userID = data.sessionToken;
        this.doggoService.sessionTokenSource.next(data.sessionToken);
        sessionStorage.setItem("accountType", data.accountType);
      });
  }
}
