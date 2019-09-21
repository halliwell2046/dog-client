import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-lisu-tabs",
  templateUrl: "./lisu-tabs.component.html",
  styleUrls: ["./lisu-tabs.component.css"]
})
export class LisuTabsComponent implements OnInit {
  value: number = 0;
  constructor(private doggoService: DoggoService) {}
  token: string = undefined;
  ngOnInit() {
    this.doggoService.sessionToken.subscribe(
      sessionToken => (this.token = sessionToken)
    );
  }
}
