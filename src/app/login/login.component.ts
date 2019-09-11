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
    private service: DogOwnerService,
    private doggoService: DoggoService
  ) {}
  ngOnInit() {}
  onSubmit() {
    this.doggoService
      .userLogin(this.service.loginForm.value)
      .subscribe((data: any) => {
        sessionStorage.setItem("token", data.sessionToken);
        sessionStorage.setItem("accountType", data.accountType)
        this.doggoService.checkToken()
      });
  }
}