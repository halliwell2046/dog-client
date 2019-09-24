import { Component, OnInit } from "@angular/core";
import { DoggoService } from "../doggo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  // title: 'logout';
  token: string;
  constructor(public doggoService: DoggoService, public router: Router) {}

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
    this.router.navigate([""]);
  }

  home() {
    this.router.navigate([""]);
  }
}
