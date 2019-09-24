import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-wlkr-ownrview",
  templateUrl: "./wlkr-ownrview.component.html",
  styleUrls: ["./wlkr-ownrview.component.css"]
})
export class WlkrOwnrviewComponent implements OnInit {
  constructor(public router: Router, public doggoService: DoggoService) {}

  ngOnInit() {}
  backButton() {
    this.router.navigate(["/dashboard"]);
    let x = [
      {
        reviewTitle: "A dog's best friend!",
        review:
          "Jill is friendly, communicative, and accommodating. She took great care of my pup, following all the directions I left, and was overall very easy to work with. Highly recommended and will book with her again, if available.",
        rating: "4",
        petPic: "http://localhost:4200/assets/mutt.jpg",
        petName: "Ross",
        age: "4"
      }
    ];
    this.doggoService.walkerReviewAcceptedSource.next(x);
  }
}
