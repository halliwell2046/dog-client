import { Component, OnInit } from '@angular/core';


export interface RequestWalk {
  date: string;
  time: string;
  dogs: string;
}

const ELEMENT_DATA: RequestWalk[] = [
  { date: '10/1/2019', time: '12:00PM', dogs: 'Bogey, Rusty' }
];

@Component({
  selector: 'app-request-walk',
  templateUrl: './request-walk.component.html',
  styleUrls: ['./request-walk.component.css']
})
export class RequestWalkComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'dogs'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
