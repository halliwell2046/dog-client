import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";
// export interface DogTable {
//   name: string;
//   breed: string;
//   age: number;
//   weight: number;
//   sex: string;
// }

// const ELEMENT_DATA: Object[] = [
//   { name: "Bogey", breed: "Boxer", age: 1, weight: 45, sex: "M" },
//   { name: "Rover", breed: "Pitbull", age: 2, weight: 40, sex: "M" },
//   { name: "BooBoo", breed: "Poodle", age: 5, weight: 55, sex: "F" }
// ];

@Component({
  selector: "app-dog-table",
  templateUrl: "./dog-table.component.html",
  styleUrls: ["./dog-table.component.css"]
})
export class DogTableComponent implements OnInit {

  displayedColumns: string[] = ["name", "breed", "age", "weight", "sex"];

  // petDataSource: Object = this.gettingPetData.petDataSource

  constructor(private gettingPetData: DoggoService) {}
  ngOnInit() {
    this.gettingPetData.ownerPetData()
  }
}

