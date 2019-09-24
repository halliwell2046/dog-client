import { Component, OnInit } from "@angular/core";
import { DogOwnerService } from "../dog-owner-create/dog-owner.service";
import { DoggoService } from "../doggo.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    public service: DogOwnerService,
    public doggoService: DoggoService
  ) {}
  ngOnInit() {}
  show: any;
  onSubmit() {
    this.doggoService
      .userLogin(this.service.loginForm.value)
      .subscribe((data: any) => {
        sessionStorage.setItem("token", data.sessionToken);
        sessionStorage.setItem("accountType", data.accountType);
        sessionStorage.setItem("lat", data.email.lat);
        sessionStorage.setItem("lng", data.email.lng);
        this.doggoService.checkToken();
        this.doggoService.userDataInfo = data;
        console.log(this.doggoService.userDataInfo);
      });
  }
}
