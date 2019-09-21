import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-recent-requests",
  templateUrl: "./recent-requests.component.html",
  styleUrls: ["./recent-requests.component.css"]
})
export class RecentRequestsComponent implements OnInit {
  currentReview: string;
  buttonReviewTitle: string = "Add Review";

  displayedColumns: string[] = [
    "date",
    "time",
    "walker",
    "status",
    "review",
    "cancel"
  ];
  recentRequest = [];
  // recentRequest = [
  //   {
  //     dateRequested: "09/25/2019",
  //     timeRequested: "2:30PM",
  //     walkerId: "1",
  //     userId: "2",
  //     isAccepted: true,
  //     isCompleted: false,
  //     ownerNotified: false,
  //     reviewTitle: "Great",
  //     review: "test",
  //     rating: "****",
  //     status: ""
  //   },
  //   {
  //     dateRequested: "09/27/2019",
  //     timeRequested: "2:30PM",
  //     walkerId: "2",
  //     userId: "2",
  //     isAccepted: false,
  //     isCompleted: false,
  //     ownerNotified: false,
  //     reviewTitle: "Great",
  //     review: "test",
  //     rating: "****",
  //     status: ""
  //   }
  // ];

  recentRequestData: object = [
    {
      id: 1,
      dateRequested: "02/19/2019",
      timeRequested: "2PM",
      walkerId: "6",
      userId: "5",
      isAccepted: null,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: null,
      review: null,
      rating: null,
      createdAt: "2019-09-12T00:46:20.840Z",
      updatedAt: "2019-09-12T00:46:20.840Z"
    }
  ];

  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.getOwnerRecentRequests().subscribe((data: any) => {
      this.doggoService.updateOwnerPendingRequestData(data);
    });
    this.doggoService.ownerPendingRequestSource.subscribe(
      data => (this.recentRequest = this.determineStatus(data))
    );
  }

  reviewToggle: boolean = false;
  addReview(id) {
    this.currentReview = id;
    this.reviewToggle = !this.reviewToggle;
    if (this.reviewToggle === true) {
      this.buttonReviewTitle = "Cancel Review";
    } else {
      this.buttonReviewTitle = "Add Review";
    }
  }

  cancelRequest(id) {
    console.log("ID >>>", id);
    this.doggoService.cancelRequest(id).subscribe(
      data => {
        this.doggoService.getOwnerRecentRequests().subscribe(
          (data: any) => {
            this.doggoService.updateOwnerPendingRequestData(data);
          },
          err => console.log("2", err)
        );
      },
      err => console.log("1", err)
    );
  }

  determineStatus(requestArray: any) {
    let status = "";
    let newRequestArray = [];
    let newRequest = [];
    newRequest = requestArray.map(data => {
      if (data.isaccepted && data.iscompleted) {
        status = "Complete";
      } else if (data.isaccepted && data.iscompleted == false) {
        status = "Accepted";
      } else {
        status = "Pending Response";
      }
      if (data.walkerid == null) {
        status = "Walker Canceled";
      }
      Object.assign(data, { status: status });
      newRequestArray.push(data);
    });
    console.log(newRequestArray);

    return newRequestArray;
  }
  $events: boolean;
  recieveMessages($events) {
    this.reviewToggle = $events;
  }
}
