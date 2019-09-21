import { Component, OnInit } from "@angular/core";
import { DoggoService } from "../doggo.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  // title: 'logout';
  token: string;
  constructor(private doggoService: DoggoService, private router: Router) {}

 

  ngOnInit() {
    this.doggoService.checkToken();

    this.doggoService.sessionToken.subscribe(
      sessionToken => (this.token = sessionToken)
    );
  }

  logOut() {
    sessionStorage.clear();
    this.doggoService.logOut();
    this.router.navigate(['']);
  }

  home() {
    this.router.navigate(['']);
  }
}
