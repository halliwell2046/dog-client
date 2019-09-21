import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-walker-recent-request",
  templateUrl: "./walker-recent-request.component.html",
  styleUrls: ["./walker-recent-request.component.css"]
})
export class WalkerRecentRequestComponent implements OnInit {
  displayedColumns: string[] = [
    "date",
    "time",
    "dogs",
    "location",
    "cancel",
    "complete"
  ];
  recentRequestData = [
    {
      dateRequested: "09/25/2019",
      timeRequested: "2:30PM",
      walkerId: "1",
      userId: "2",
      isAccepted: false,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: "Great",
      review: "test",
      rating: "****"
    },
    {
      dateRequested: "09/27/2019",
      timeRequested: "2:30PM",
      walkerId: "1",
      userId: "2",
      isAccepted: true,
      isCompleted: true,
      ownerNotified: false,
      reviewTitle: "Great",
      review: "test",
      rating: "****"
    }
  ];

  constructor(private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService
      .getAcceptedWalkerRequest()
      .subscribe(
        data => this.doggoService.walkerUpdateAcceptedData(data),
        err => console.log(err)
      );
    this.doggoService.walkerAcceptedData.subscribe(
      result => (this.recentRequestData = result)
    );
  }
  markedComplete(id) {
    console.log(id);
    this.doggoService.walkerMarksComplete(id).subscribe(data => {
      console.log(data);
      this.doggoService
        .getAcceptedWalkerRequest()
        .subscribe(data => this.doggoService.walkerUpdateAcceptedData(data));
    });
  }

  markedCancel(id) {
    console.log(id);
    this.doggoService.walkerMarksCancel(id).subscribe(data => {
      console.log(data);
      this.doggoService
        .getAcceptedWalkerRequest()
        .subscribe(data => this.doggoService.walkerUpdateAcceptedData(data));
    });
  }
}
