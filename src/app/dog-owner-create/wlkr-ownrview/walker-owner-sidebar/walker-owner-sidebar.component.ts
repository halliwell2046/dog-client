import { Component, OnInit, OnDestroy } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-walker-owner-sidebar",
  templateUrl: "./walker-owner-sidebar.component.html",
  styleUrls: ["./walker-owner-sidebar.component.css"]
})
export class WalkerOwnerSidebarComponent implements OnInit {
  walkerData: object = {
    firstName: "Jill",
    lastName: "Farmington",
    rating: 4,
    bio:
      "I've been an animal lover since birth and I'm excited to meet your dog. We will definitely go on walks on the Monon Trail and play in Broad Ripple Park since I live across the street from it. I have tons of toys and treats also. Your dog will get plenty of attention from me and my dog. My dog loves having friends come along on walks with us.",
    pic: "../../assets/walker-icon.png"
  };
  constructor(
    public doggoService: DoggoService,
    public activeRoute: ActivatedRoute
  ) {}

  firstName: string;
  lastName: string;
  bio: string;
  rating: string = "0";
  picture: string = "../../assets/owner-icon.png";
  condition: boolean;
  id: any;
  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.doggoService.reviewUserInfo(this.id).subscribe((requested: any) => {
      this.firstName = requested.data.firstName;
      this.lastName = requested.data.lastName;
      this.bio = requested.data.bio;
      this.walkerData = {
        firstName: requested.data.firstName,
        lastName: requested.data.lastName,
        bio: requested.data.bio
      };
      if (requested.data.pic == null || requested.data.pic == "") {
        Object.assign(this.walkerData, {
          pic: "../../assets/walker-icon.png"
        });
        this.picture = requested.data.pic;
      } else {
        Object.assign(this.walkerData, { pic: requested.data.pic });
        this.picture = requested.data.pic;
      }
      this.doggoService.userDataInfo = requested.data;
    });
    this.doggoService.walkerReviewAcceptedSource.subscribe(data => {
      this.rating = (
        data.reduce((a, b) => a + Number(b.rating), 0) / data.length
      ).toString();
    });
  }
}
