import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  // template: `<button (click)="onClickMe()">Update!</button>
  // {{clickMessage}}`,
  // `input (keyup)="onKey"($event)">
  // <p>{{values}}</p>`,

  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {
  // clickMessage = '';
  // // values = '';

  // onClickMe() {
  //   this.clickMessage = 'Update!';

  // onkeydown(event: any) {
  //   this.values += event.target.value + ' | ';
  // }
  // }

  constructor() { }

  ngOnInit() {
  }

}
