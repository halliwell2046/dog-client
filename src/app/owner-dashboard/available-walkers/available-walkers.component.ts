import { Component, OnInit } from '@angular/core';
export interface AvailalbeWalkers {
  id: number;
  walker: string;
  rating: string;
  request: string;
}

const ELEMENT_DATA: AvailalbeWalkers[] = [
  {id: 1, walker: 'Jill Farmington', rating: '****', request: 'yes or no' }
];

@Component({
  selector: 'app-available-walkers',
  templateUrl: './available-walkers.component.html',
  styleUrls: ['./available-walkers.component.css']
})
export class AvailableWalkersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'walker', 'rating', 'request'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
