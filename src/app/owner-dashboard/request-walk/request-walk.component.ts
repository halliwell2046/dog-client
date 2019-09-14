import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-request-walk',
  templateUrl: './request-walk.component.html',
  styleUrls: ['./request-walk.component.css']
})
export class RequestWalkComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'dogs'];
  requestWalk = [
    {
      dateRequested: '09/25/2019', 
      timeRequested: '2:30PM',
      walkerId: '1',
      userId: '2',
      isAccepted: true,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: 'Great', 
      review: 'test',
      rating: '****',
    },
      {
        dateRequested: '09/27/2019', 
        timeRequested: '2:30PM',
        walkerId: '1',
        userId: '2',
        isAccepted: false,
        isCompleted: false,
        ownerNotified: false,
        reviewTitle: 'Great', 
        review: 'test',
        rating: '****',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
