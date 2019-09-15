import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-walker-sidebar",
  templateUrl: "./walker-sidebar.component.html",
  styleUrls: ["./walker-sidebar.component.css"]
})
export class WalkerSidebarComponent implements OnInit {
  walkerData: object = {
    firstName: "Jill",
    lastName: "Farmington",
    rating: 4,
    bio:
      "I've been an animal lover since birth and I'm excited to meet your dog. We will definitely go on walks on the Monon Trail and play in Broad Ripple Park since I live across the street from it. I have tons of toys and treats also. Your dog will get plenty of attention from me and my dog. My dog loves having friends come along on walks with us."
  };
  constructor(private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.walkerData = {
        firstName: requested.data.firstName,
        lastName: requested.data.lastName,
        bio: requested.data.bio
      };
      if (requested.data.pic !== null || requested.data.pic !== " ") {
        Object.assign(this.walkerData, { pic: requested.data.pic });
      } else {
        Object.assign(this.walkerData, { pic: "../../assets/walker-icon.png" });
      }
    });
  }
}
