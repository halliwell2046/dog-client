import { Component, OnInit } from "@angular/core";
import { DoggoService } from "../doggo.service";

@Component({
  selector: "app-owner-dashboard",
  templateUrl: "./owner-dashboard.component.html",
  styleUrls: ["./owner-dashboard.component.css"]
})
export class OwnerDashboardComponent implements OnInit {
  displayWalkers = false;

  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.zipcodeData.subscribe(walkers => {
      if (walkers.length > 0) {
        this.displayWalkers = true;
      } else {
        this.displayWalkers = false;
      }
    });
  }

  receivedBooked($event) {
    this.displayWalkers = false;
  }
}
