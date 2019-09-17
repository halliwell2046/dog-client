import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { map, catchError } from "rxjs/operators";
import { DoggoService } from "src/app/doggo.service";
import { Observable, of } from "rxjs";

export interface DialogData {
  time: string;
  date: string;
}
@Component({
  selector: "app-request-walk",
  templateUrl: "./request-walk.component.html",
  styleUrls: ["./request-walk.component.css"]
})
export class RequestWalkComponent implements OnInit {
  displayedColumns: string[] = ["date", "time", "dogs"];
  requestWalk = [
    {
      // dateRequested: '09/25/2019',
      // timeRequested: '2:30PM',
      // walkerId: '1',
      // userId: '2',
      // isAccepted: true,
      // isCompleted: false,
      // ownerNotified: false,
      // reviewTitle: 'Great',
      // review: 'test',
      // rating: '****',
    }
  ];

  constructor(public dialog: MatDialog, private doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.petData.subscribe(pet => (this.pets = pet));
    console.log(this.dogs);
  }

  time: string;
  date: string;
  pets: any;
  dogs: string;

  addRequest(): void {
    const dialogRef = this.dialog.open(DialogRequest, {
      width: "600px",
      data: { time: this.time, date: this.date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dogs = this.pets.map(data => data.petName).join(" ");

      this.requestWalk = [
        {
          dateRequested: result.date.toLocaleDateString("en-US"),
          timeRequested: result.time,
          dogs: this.dogs
        }
      ];
      console.log(this.requestWalk);
    });
  }
}

@Component({
  selector: "dialog-request",
  templateUrl: "dialog-request.html"
})
export class DialogRequest {
  times: Object = [
    "0800",
    "0830",
    "0900",
    "1000",
    "1030",
    "1100",
    "1130",
    "1200"
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogRequest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
