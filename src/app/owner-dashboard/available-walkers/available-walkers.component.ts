import { Component, OnInit, Input } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";
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
      id: 6,
      userName: "walker@walker.com",
      firstName: "walker",
      lastName: "ranger",
      password: "$2a$10$h9SNfaVkdauwVPY/8V5Mz.ZqJcQ3L5xQGAFWjB5AsbeEupWBj1xOm",
      address: "32323",
      city: "232",
      state: "1",
      zip: "46259",
      phoneNumber: "er2r2wer",
      bio: "bio",
      accountType: "walker",
      pic:
        "https://amp.businessinsider.com/images/5d35f24a100a241a332b0857-1136-852.jpg",
      rating: null,
      numberOfWalks: null,
      lat: null,
      lng: null,
      createdAt: "2019-09-08T18:38:58.974Z",
      updatedAt: "2019-09-16T01:31:08.198Z"
    },
    {
      id: 6,
      userName: "walker@walker.com",
      firstName: "walker",
      lastName: "ranger",
      password: "$2a$10$h9SNfaVkdauwVPY/8V5Mz.ZqJcQ3L5xQGAFWjB5AsbeEupWBj1xOm",
      address: "32323",
      city: "232",
      state: "1",
      zip: "46259",
      phoneNumber: "er2r2wer",
      bio: "bio",
      accountType: "walker",
      pic:
        "https://amp.businessinsider.com/images/5d35f24a100a241a332b0857-1136-852.jpg",
      rating: null,
      numberOfWalks: null,
      lat: null,
      lng: null,
      createdAt: "2019-09-08T18:38:58.974Z",
      updatedAt: "2019-09-16T01:31:08.198Z"
    },
    {
      id: 6,
      userName: "walker@walker.com",
      firstName: "walker",
      lastName: "ranger",
      password: "$2a$10$h9SNfaVkdauwVPY/8V5Mz.ZqJcQ3L5xQGAFWjB5AsbeEupWBj1xOm",
      address: "32323",
      city: "232",
      state: "1",
      zip: "46259",
      phoneNumber: "er2r2wer",
      bio: "bio",
      accountType: "walker",
      pic:
        "https://amp.businessinsider.com/images/5d35f24a100a241a332b0857-1136-852.jpg",
      rating: "*****",
      numberOfWalks: null,
      lat: null,
      lng: null,
      createdAt: "2019-09-08T18:38:58.974Z",
      updatedAt: "2019-09-16T01:31:08.198Z"
    },
    {
      id: 6,
      userName: "walker@walker.com",
      firstName: "walker",
      lastName: "ranger",
      password: "$2a$10$h9SNfaVkdauwVPY/8V5Mz.ZqJcQ3L5xQGAFWjB5AsbeEupWBj1xOm",
      address: "32323",
      city: "232",
      state: "1",
      zip: "46259",
      phoneNumber: "er2r2wer",
      bio: "bio",
      accountType: "walker",
      pic:
        "https://amp.businessinsider.com/images/5d35f24a100a241a332b0857-1136-852.jpg",
      rating: null,
      numberOfWalks: null,
      lat: null,
      lng: null,
      createdAt: "2019-09-08T18:38:58.974Z",
      updatedAt: "2019-09-16T01:31:08.198Z"
    }
  ];

  constructor(private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.zipcodeData.subscribe(
      walkers => (this.availableWalkers = walkers)
    );
  }

  bookWalker(id) {
    this.doggoService.bookTheWalker(id).subscribe(data => {
      this.doggoService.updateRequestingWalkerData([]);
    });
  }
}
