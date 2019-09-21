import { Component, OnInit } from "@angular/core";
import { DoggoService } from "../doggo.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  token: string;
  constructor(private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.checkToken();

    this.doggoService.sessionToken.subscribe(sessionToken => {
      this.token = sessionToken;
      console.log(this.token);
    });
  }

  logOut() {
    sessionStorage.clear();
    this.doggoService.logOut();
  }
}
