import { Component, OnInit } from '@angular/core';
export interface RecentRequest {
  date: string;
  time: string;
  walker: string;
  status: string;
  review: string;
  cancel: string;
}

const ELEMENT_DATA: RecentRequest[] =[
{ date: '9/5/2019', time: '2:00PM', walker: 'Jane', status: 'Accepted', review: 'test review', cancel: 'yes or no' }
];

@Component({
  selector: 'app-recent-requests',
  templateUrl: './recent-requests.component.html',
  styleUrls: ['./recent-requests.component.css']
})
export class RecentRequestsComponent implements OnInit {
  displayedColumns: string[] = ['dateRequested', 'timeRequested', 'walker', 'status', 'review', 'cancel'];
  dataSource = ELEMENT_DATA;

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
