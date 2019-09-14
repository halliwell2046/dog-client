import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  time: string;
  date: string;

  addRequest(): void {
    const dialogRef = this.dialog.open(DialogRequest, {
      width: "250px",
      data: { time: this.time, date: this.date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.requestWalk = [
        {
          dateRequested: result.date,
          timeRequested: result.time
        }
      ];
    });
  }
}

@Component({
  selector: "dialog-request",
  templateUrl: "dialog-request.html"
})
export class DialogRequest {
  constructor(
    public dialogRef: MatDialogRef<DialogRequest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
