import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";


@Component({
  selector: "app-dog-table",
  templateUrl: "./dog-table.component.html",
  styleUrls: ["./dog-table.component.css"]
})
export class DogTableComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "breed",
    "age",
    "weight",
    "sex",
    "action"
  ];

  // petDataSource: Object = this.gettingPetData.petDataSource

  constructor(private doggoService: DoggoService) {}

  data;
  ngOnInit() {
    this.doggoService.ownerPetData();

    this.doggoService.cast.subscribe(pet => (this.data = pet));
  }

  deleteDog(id) {
    // this.doggoService.petDataSource=[]
    this.doggoService.deletePetData(id);
  }
}
