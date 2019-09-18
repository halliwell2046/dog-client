import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-owner-sidebar",
  templateUrl: "./owner-sidebar.component.html",
  styleUrls: ["./owner-sidebar.component.css"]
})
export class OwnerSidebarComponent implements OnInit {
  firstName: string;
  lastName: string;
  picture: string = "../../assets/owner-icon.png";
  constructor(private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.firstName = requested.data.firstName;
      this.lastName = requested.data.lastName;
      console.log(requested);
      if (requested.data.pic == null || requested.data.pic == "") {
        this.picture = "../../assets/owner-icon.png";
      } else {
        this.picture = requested.data.pic;
      }
      this.doggoService.userDataInfo = requested.data;
    });
  }
}
