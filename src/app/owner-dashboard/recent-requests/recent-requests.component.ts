import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recent-requests',
  templateUrl: './recent-requests.component.html',
  styleUrls: ['./recent-requests.component.css']
})
export class RecentRequestsComponent implements OnInit {
<<<<<<< HEAD
  displayedColumns: string[] = ['dateRequested', 'timeRequested', 'walker', 'status', 'review', 'cancel'];
  dataSource = ELEMENT_DATA;
=======
  displayedColumns: string[] = ['date', 'time', 'walker', 'status', 'review', 'cancel'];
  recentRequest = [
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
        walkerId: '2',
        userId: '2',
        isAccepted: false,
        isCompleted: false,
        ownerNotified: false,
        reviewTitle: 'Great', 
        review: 'test',
        rating: '****',
    }
  ]
>>>>>>> 7d30a60636460b8f1cb98cdc68d96dea92e70e56

  recentRequestData: object =[
    {
      id: 1,
      dateRequested: "02/19/2019",
      timeRequested: "2PM",
      walkerId: "6",
      userId: "5",
      isAccepted: null,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: null,
      review: null,
      rating: null,
      createdAt: "2019-09-12T00:46:20.840Z",
      updatedAt: "2019-09-12T00:46:20.840Z"
  }
  ]


  constructor() { }

  ngOnInit() {
  }

}
