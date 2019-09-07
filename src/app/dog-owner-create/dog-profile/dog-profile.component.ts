import { Component, OnInit } from '@angular/core';
import { DogOwnerService } from '../dog-owner.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {


  constructor(private service: DogOwnerService) { }

  ngOnInit() {
  }

}
