import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-walker-owner-review-cards",
  templateUrl: "./walker-owner-review-cards.component.html",
  styleUrls: ["./walker-owner-review-cards.component.css"]
})
export class WalkerOwnerReviewCardsComponent implements OnInit {
  reviewData = [
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
  id: any;
  constructor(
    public doggoService: DoggoService,
    public activeRoute: ActivatedRoute
  ) {}
  walkerAcceptedata: any = [];
  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.doggoService.getWalkerReviewCards(this.id);
    console.log(this.id);
    this.doggoService.walkerReviewAcceptedSource.subscribe(data => {
      console.log(data);
      this.reviewData = data.filter(result => result.review != null);
      console.log("review data: ", this.reviewData);
      // this.walkerAcceptedata.forEach(filteringReviewsOnly => {
      //   let picture = "";
      //   if (filteringReviewsOnly.rating != null) {
      //     this.doggoService
      //       .walkerReviewDogPics(filteringReviewsOnly.userid)
      //       .subscribe((result: any) => {
      //         console.log(result);
      //         picture = result.data.petPic;
      //         let icons = "pets";
      //         for (let x = 1; x < Number(filteringReviewsOnly.rating); x++) {
      //           icons = icons + " pets";
      //         }
      //         console.log(icons);
      //         Object.assign(filteringReviewsOnly, { petPic: picture });
      //         Object.assign(filteringReviewsOnly, { petIcons: icons });
      //         Object.assign(filteringReviewsOnly, { age: result.data.age });
      //         this.reviewData.push(filteringReviewsOnly);
      //       });
      //     console.log(this.reviewData);
      //   }
      // });
    });
  }
  filterCards() {
    return this.reviewData.filter((item, index) => index < 4);
  }
}
