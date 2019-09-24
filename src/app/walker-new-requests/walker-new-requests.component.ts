import { Component, OnInit } from "@angular/core";
import { DoggoService } from "../doggo.service";

@Component({
  selector: "app-walker-new-requests",
  templateUrl: "./walker-new-requests.component.html",
  styleUrls: ["./walker-new-requests.component.css"]
})
export class WalkerNewRequestsComponent implements OnInit {
  displayedColumns: string[] = [
    "date",
    "time",
    "dogs",
    "location",
    "accept",
    "decline"
  ];
  pendingRequestData: any = [
    {
      dateRequested: "09/25/2019",
      timeRequested: "2:30PM",
      walkerId: "1",
      userId: "2",
      isAccepted: true,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: "Great",
      review: "test",
      rating: "****",
      dogs: "Poochie, Goochie"
    },
    {
      dateRequested: "09/27/2019",
      timeRequested: "2:30PM",
      walkerId: "1",
      userId: "2",
      isAccepted: false,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: "Great",
      review: "test",
      rating: "****"
    }
  ];

  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    console.log(
      "this is the value" + this.doggoService.sessionTokenSource.value
    );
    this.doggoService.getPendingWalkerRequest().subscribe(data => {
      console.log(data);
      this.doggoService.walkerUpdatePendingData(data);
    });
    this.doggoService.walkerPendingData.subscribe(
      result => (this.pendingRequestData = result)
    );
  }

  acceptRequest(id: number) {
    this.doggoService.walkerAccepts(id).subscribe(
      data => {
        console.log(data);
        this.refreshTable();
      },
      err => console.log(err)
    );
  }

  refreshTable(): void {
    this.doggoService.getPendingWalkerRequest().subscribe(data => {
      console.log(data);
      this.pendingRequestData = data;
    });
    this.doggoService
      .getAcceptedWalkerRequest()
      .subscribe(data => this.doggoService.walkerUpdateAcceptedData(data));
  }

  declineRequest(id) {
    this.doggoService.walkerDeclines(id).subscribe(result => {
      this.refreshTable();
    });
  }

  buttonClick() {
    this.doggoService.getPendingWalkerRequest().subscribe(data => {
      console.log(data);
      this.doggoService.walkerUpdatePendingData(data);
    });
  }
  refreshData() {
    this.doggoService.getPendingWalkerRequest().subscribe(data => {
      console.log(data);
      this.doggoService.walkerUpdatePendingData(data);
    });
  }
}
