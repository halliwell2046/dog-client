import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-owner-walkerview-sidebar",
  templateUrl: "./owner-walkerview-sidebar.component.html",
  styleUrls: ["./owner-walkerview-sidebar.component.css"]
})
export class OwnerWalkerviewSidebarComponent implements OnInit {
  firstName: string;
  lastName: string;
  picture: string = "../../assets/owner-icon.png";
  condition: boolean;
  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.firstName = requested.data.firstName;
      this.lastName = requested.data.lastName;
      if (requested.data.pic == null || requested.data.pic == "") {
        this.picture = "../../assets/owner-icon.png";
      } else {
        this.picture = requested.data.pic;
      }
      this.doggoService.userDataInfo = requested.data;
    });
  }
}
