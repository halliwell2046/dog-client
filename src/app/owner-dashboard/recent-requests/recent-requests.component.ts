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
  displayedColumns: string[] = ['date', 'time', 'walker', 'status', 'review', 'cancel'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
