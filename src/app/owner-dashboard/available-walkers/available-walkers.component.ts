import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Input() displayWalkers: boolean;
  @Output() displayWalkerEvent = new EventEmitter<boolean>();
  iconOwner = "../../assets/dog-with-leash.png";
  iconWalker = "../../assets/walker-marker.png";
  displayedColumns: string[] = ["id", "walker", "rating", "request"];
  availableWalkers = [];

  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.zipcodeData.subscribe(
      walkers => (this.availableWalkers = walkers)
    );
  }

  bookWalker(id) {
    this.doggoService.bookTheWalker(id).subscribe(data => {
      this.doggoService.getOwnerRecentRequests().subscribe((data: any) => {
        this.doggoService.updateOwnerPendingRequestData(data);
      });
      this.doggoService.updateRequestingWalkerData([]);
      this.displayWalkers = false;
      this.displayWalkerEvent.emit(this.displayWalkers);
    });
  }
}
