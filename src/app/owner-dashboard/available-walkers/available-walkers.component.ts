import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-available-walkers",
  templateUrl: "./available-walkers.component.html",
  styleUrls: ["./available-walkers.component.css"]
})
export class AvailableWalkersComponent implements OnInit {
  lat = 39.7684;
  lng = 86.1581;
  lat2 = 39.9612;
  lng2 = 82.9988;
  displayedColumns: string[] = ["id", "walker", "rating", "request"];
  availableWalkers = [
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
      rating: "****"
    },
    {
      dateRequested: "09/27/2019",
      timeRequested: "2:30PM",
      walkerId: "2",
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
      walkerId: "3",
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
      walkerId: "4",
      userId: "2",
      isAccepted: false,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: "Great",
      review: "test",
      rating: "****"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
