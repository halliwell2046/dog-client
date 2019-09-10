import { Component, OnInit } from '@angular/core';

export interface NewRequest {
  date: string;
  time: string;
  dogs: string;
  location: string;
  accept: string;
  decline: string;
}

const ELEMENT_DATA: NewRequest[]=[
  { date: '9/15/2019', time: '3:30PM', dogs: 'Charlotte, Bogey', location: '926 Ketcham St.', accept: 'accept', decline: 'decline'}
];

@Component({
  selector: 'app-walker-new-requests',
  templateUrl: './walker-new-requests.component.html',
  styleUrls: ['./walker-new-requests.component.css']
})
export class WalkerNewRequestsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'dogs', 'location', 'accept', 'decline'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
