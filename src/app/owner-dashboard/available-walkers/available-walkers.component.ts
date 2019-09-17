import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-available-walkers",
  templateUrl: "./available-walkers.component.html",
  styleUrls: ["./available-walkers.component.css"]
})
export class AvailableWalkersComponent implements OnInit {
  lat = Number(sessionStorage.getItem("lat"));
  lng = Number(sessionStorage.getItem("lng"));
  // lat2 = 39.6915486;
  // lng2 = -86.0306551;
  walkers = [
    {
      lat: 39.690705,
      lng: -86.061802
    },
    {
      lat: 39.669485,
      lng: -86.039276
    },
    {
      lat: 39.719363,
      lng: -86.026258
    }
  ];

  iconOwner = "../../assets/dog-with-leash.png";
  iconWalker = "../../assets/walker-marker.png";
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
